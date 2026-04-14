from typing import List, Dict


class OrganizationService:
    """
    Service responsible for organizing tracks based on different strategies.

    Supported strategies:
    - bpm: sort by tempo
    - energy: sort by energy level
    - valence: sort by mood
    - smart_mix: smooth transitions using multi-feature distance
    """

    DEFAULT_BPM = 120
    DEFAULT_ENERGY = 0.5
    DEFAULT_VALENCE = 0.5

    # Weight configuration (easy to tune later)
    BPM_WEIGHT = 0.3
    ENERGY_WEIGHT = 0.5
    VALENCE_WEIGHT = 0.2

    BPM_NORMALIZATION_FACTOR = 100  # important fix
    REQUIRED_METRICS_BY_STRATEGY = {
        "bpm": ("bpm",),
        "energy": ("energy",),
        "valence": ("valence",),
        "smart_mix": ("bpm", "energy", "valence"),
    }

    @staticmethod
    def organize(tracks: List[Dict], strategy: str = "smart_mix") -> List[Dict]:
        if not tracks:
            return []

        if strategy == "bpm":
            return OrganizationService._by_bpm(tracks)

        if strategy == "energy":
            return OrganizationService._by_energy(tracks)

        if strategy == "valence":
            return OrganizationService._by_valence(tracks)

        if strategy == "smart_mix":
            return OrganizationService._smart_mix(tracks)

        raise ValueError(f"Invalid strategy: {strategy}")

    # -------------------------
    # SIMPLE STRATEGIES
    # -------------------------

    @staticmethod
    def _by_bpm(tracks: List[Dict]) -> List[Dict]:
        return OrganizationService._sort_by_metric(tracks, "bpm", OrganizationService.DEFAULT_BPM)

    @staticmethod
    def _by_energy(tracks: List[Dict]) -> List[Dict]:
        return OrganizationService._sort_by_metric(
            tracks,
            "energy",
            OrganizationService.DEFAULT_ENERGY,
        )

    @staticmethod
    def _by_valence(tracks: List[Dict]) -> List[Dict]:
        return OrganizationService._sort_by_metric(
            tracks,
            "valence",
            OrganizationService.DEFAULT_VALENCE,
        )

    # -------------------------
    # SMART MIX (CORE LOGIC)
    # -------------------------

    @staticmethod
    def _smart_mix(tracks: List[Dict]) -> List[Dict]:
        if len(tracks) <= 2:
            return OrganizationService._append_sparse_tracks(tracks, strategy="smart_mix")

        complete_tracks = [
            track for track in tracks
            if OrganizationService._has_metrics(track, strategy="smart_mix")
        ]
        sparse_tracks = [
            track for track in tracks
            if not OrganizationService._has_metrics(track, strategy="smart_mix")
        ]

        if len(complete_tracks) <= 2:
            return complete_tracks + OrganizationService._append_sparse_tracks(
                sparse_tracks,
                strategy="smart_mix",
            )

        remaining = complete_tracks.copy()

        current = min(
            remaining,
            key=lambda t: (
                OrganizationService._safe_metric(t.get("energy"), OrganizationService.DEFAULT_ENERGY),
                OrganizationService._safe_metric(t.get("valence"), OrganizationService.DEFAULT_VALENCE),
                OrganizationService._safe_metric(t.get("bpm"), OrganizationService.DEFAULT_BPM),
            ),
        )

        ordered = [current]
        remaining.remove(current)

        while remaining:
            next_track = min(
                remaining,
                key=lambda t: OrganizationService._distance(current, t)
            )

            ordered.append(next_track)
            remaining.remove(next_track)
            current = next_track

        return ordered + OrganizationService._append_sparse_tracks(
            sparse_tracks,
            strategy="smart_mix",
        )

    # -------------------------
    # DISTANCE FUNCTION (FIXED)
    # -------------------------

    @staticmethod
    def _distance(t1: Dict, t2: Dict) -> float:
        """
        Compute similarity distance between two tracks.

        Fixes:
        - Normalized BPM
        - Balanced feature contribution
        """

        bpm1 = OrganizationService._safe_metric(
            t1.get("bpm"),
            OrganizationService.DEFAULT_BPM,
        )
        bpm2 = OrganizationService._safe_metric(
            t2.get("bpm"),
            OrganizationService.DEFAULT_BPM,
        )

        e1 = OrganizationService._safe_metric(
            t1.get("energy"),
            OrganizationService.DEFAULT_ENERGY,
        )
        e2 = OrganizationService._safe_metric(
            t2.get("energy"),
            OrganizationService.DEFAULT_ENERGY,
        )

        v1 = OrganizationService._safe_metric(
            t1.get("valence"),
            OrganizationService.DEFAULT_VALENCE,
        )
        v2 = OrganizationService._safe_metric(
            t2.get("valence"),
            OrganizationService.DEFAULT_VALENCE,
        )

        # 🔥 Normalize BPM difference
        bpm_diff = abs(bpm1 - bpm2) / OrganizationService.BPM_NORMALIZATION_FACTOR

        return (
            OrganizationService.BPM_WEIGHT * bpm_diff +
            OrganizationService.ENERGY_WEIGHT * abs(e1 - e2) +
            OrganizationService.VALENCE_WEIGHT * abs(v1 - v2)
        )

    @staticmethod
    def _safe_metric(value, default: float) -> float:
        return default if value is None else value

    @staticmethod
    def _has_metrics(track: Dict, strategy: str) -> bool:
        required = OrganizationService.REQUIRED_METRICS_BY_STRATEGY.get(strategy, ())
        return all(track.get(metric) is not None for metric in required)

    @staticmethod
    def _sort_by_metric(tracks: List[Dict], metric: str, default: float) -> List[Dict]:
        return sorted(
            tracks,
            key=lambda track: (
                track.get(metric) is None,
                OrganizationService._safe_metric(track.get(metric), default),
                str(track.get("title") or ""),
                str(track.get("id") or ""),
            ),
        )

    @staticmethod
    def _append_sparse_tracks(tracks: List[Dict], strategy: str) -> List[Dict]:
        required = OrganizationService.REQUIRED_METRICS_BY_STRATEGY.get(strategy, ())
        return sorted(
            tracks,
            key=lambda track: (
                sum(track.get(metric) is not None for metric in required) * -1,
                OrganizationService._safe_metric(track.get("energy"), OrganizationService.DEFAULT_ENERGY),
                OrganizationService._safe_metric(track.get("valence"), OrganizationService.DEFAULT_VALENCE),
                OrganizationService._safe_metric(track.get("bpm"), OrganizationService.DEFAULT_BPM),
                str(track.get("title") or ""),
                str(track.get("id") or ""),
            ),
        )

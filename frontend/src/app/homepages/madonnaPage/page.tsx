"use client";
import HomeImportButton from "@/components/Buttons/Buttons";
import "@/components/Buttons/ColorSliver";
import { LeftPanel, RightPanel } from "@/components/MainBlocks/Panels";
import "@/components/Navbar/Navbar";
import "@/components/SongCard/SongCard";
import Image from "next/image";

import "@/components/Buttons/Buttons.css";
import "@/components/MainBlocks/Decor.css";
import "@/components/MainBlocks/Panels.css";
import "@/components/Navbar/Navbar.css";
import "@/components/SongCard/SongCard.css";

import "@/app/globals.css";
import madonnaAlbum from "@/assets/images/madonnaAlbumCover.jpg";
import mxrLogo from "@/assets/images/mxr.png";
import { ColorSliver } from "@/components/Buttons/ColorSliver";
import Navbar from "@/components/Navbar/Navbar";
import { SongCard } from "@/components/SongCard/SongCard";

import ReactPlayer from "react-player";

function Home() {
	return (
		<div className="defaultDiv">
			<a href="/"><Image className="mxrLogo" src={mxrLogo} alt="Mixxer Logo" title="Mixxer Logo" /></a>
			<div className="flexRow">
				<LeftPanel className="leftMadonnaBig ">
					<br></br>
					<br></br>
					<br></br>
					<h1 className="h1">Welcome to Mixxer!</h1>
					<h3 className="h3">Organize. Share. Enjoy.</h3>
					<hr className="hr"></hr>

					<p
						className="p"
						style={{ color: "white", maxWidth: "25vw" }}
					>
						Enhance your listening experience by organizing your
						playlist--sort by BPM, mood, and genre to create
						seamless transitions.
					</p>

					<div className="buttonHolder" style={{ marginTop: "2vh" }}>
						<ColorSliver className="madonnaColorSliver" />
						<HomeImportButton />
					</div>
				</LeftPanel>

				<LeftPanel className="leftMadonnaSmall" />

				<RightPanel className="rightMadonna">
					<Navbar className="madonnaNavbar" />

					<hr className="madonnaNavHR"></hr>
					<ReactPlayer
						className="madonnaVideo"
						src="/videos/madonnaVogueLive.mp4"
						height="100vh"
						width="100vw"
						controls={false}
						autoPlay={true}
						loop={true}
						muted={true}
					/>
					<SongCard className="madonnaCard align-items:center z-index:1">
						<Image
							className="photocard "
							src={madonnaAlbum}
							alt="Vogue, Madonna Album Cover"
							title="Vogue - Madonna Album Cover"
						/>
						<div
							className="songTitle"
							style={{ backgroundColor: "black", color: "white" }}
						>
							VOGUE
						</div>
						<div
							className="songArtist"
							style={{ backgroundColor: "white", color: "black" }}
						>
							Madonna
						</div>
					</SongCard>

					<div className="carouselButtons">
						<a href="/">
							<button className="circularButtonLeft madonnaCircle">
								←
							</button>
						</a>
						<a href="/homepages/newJeansPage">
							<button className="circularButtonRight madonnaCircle">
								→
							</button>
						</a>
					</div>
				</RightPanel>
			</div>
		</div>
	);
}

export default Home;

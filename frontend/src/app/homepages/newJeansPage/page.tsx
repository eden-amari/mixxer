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
import mxrLogo from "@/assets/images/mxr.png";
import newJeansAlbum from "@/assets/images/newJeansAlbumCover.jpeg";
import { ColorSliver } from "@/components/Buttons/ColorSliver";
import Navbar from "@/components/Navbar/Navbar";
import { SongCard } from "@/components/SongCard/SongCard";
import ReactPlayer from "react-player";

function Home() {
	return (
		<div className="defaultDiv">
			<a href="/"><Image className="mxrLogo" src={mxrLogo} alt="Mixxer Logo" title="Mixxer Logo" /></a>
			<div className="flexRow">
				<LeftPanel className="leftNewJeansBig ">
					<br></br>
					<br></br>
					<br></br>
					<h1 className="h1" style={{ color: "black" }}>
						Welcome to Mixxer!
					</h1>
					<h3 className="h3" style={{ color: "black" }}>
						Organize. Share. Enjoy.
					</h3>
					<hr
						className="hr"
						style={{ border: "2px solid black" }}
					></hr>

					<p className="p" style={{ maxWidth: "25vw" }}>
						Enhance your listening experience by organizing your
						playlist--sort by BPM, mood, and genre to create
						seamless transitions.
					</p>

					<div className="buttonHolder">
						<ColorSliver className="newJeansColorSliver" />
						<HomeImportButton />
					</div>
				</LeftPanel>

				<LeftPanel className="leftNewJeansSmall" />

				<RightPanel className="rightNewJeans">
					<Navbar className="newJeansNavbar" />

					<hr className="newJeansNavHR"></hr>
					<ReactPlayer
						className="newJeansVideo"
						src="/videos/newJeansMV.mp4"
						height="100vh"
						width="100vw"
						controls={false}
						autoPlay={true}
						loop={true}
						muted={true}
					/>
					<SongCard className="newJeansCard align-items:center z-index:1">
						<Image
							className="photocard "
							src={newJeansAlbum}
							alt="New Jeans, New Jeans Album Cover"
							title="New Jeans - New Jeans Album Cover"
						/>
						<div
							className="songTitle"
							style={{ backgroundColor: "black", color: "white" }}
						>
							COOKIE
						</div>
						<div
							className="songArtist"
							style={{ backgroundColor: "white", color: "black" }}
						>
							New Jeans
						</div>
					</SongCard>
					<div className="carouselButtons">
						<a href="/homepages/madonnaPage">
							<button className="circularButtonLeft newJeansCircle">
								←
							</button>
						</a>
						<a href="/homepages/mcrPage">
							<button className="circularButtonRight newJeansCircle">
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

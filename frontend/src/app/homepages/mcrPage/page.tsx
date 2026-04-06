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
import mcrAlbum from "@/assets/images/threecheerscover.png";
import { ColorSliver } from "@/components/Buttons/ColorSliver";
import Navbar from "@/components/Navbar/Navbar";
import { SongCard } from "@/components/SongCard/SongCard";
import ReactPlayer from "react-player";

function Home() {
	return (
		<div className="defaultDiv">
			<a href="/"><Image className="mxrLogo" src={mxrLogo} alt="Mixxer Logo" title="Mixxer Logo" /></a>
			<div className="flexRow">
				<LeftPanel className="leftmcrBig ">
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

					<div className="buttonHolder">
						<ColorSliver className="mcrColorSliver" />
						<HomeImportButton />
					</div>
				</LeftPanel>

				<LeftPanel className="leftmcrSmall" />

				<RightPanel className="rightmcr">
					<Navbar className="mcrNavbar" />
					{/*
          <hr className="mcrNavHR"></hr> */}
					<ReactPlayer
						className="mcrVideo"
						src="/videos/mcrHelenaMV.mp4"
						height="100vh"
						width="100vw"
						controls={false}
						autoPlay={true}
						loop={true}
						muted={true}
					/>
					<SongCard className="mcrCard align-items:center z-index:1">
						<Image
							className="photocard "
							src={mcrAlbum}
							alt="Three Cheers For Sweet Revenge, MCR Album Cover"
							title="Three Cheers For Sweet Revenge - MCR Album Cover"
						/>
						<div
							className="songTitle"
							style={{ backgroundColor: "black", color: "white" }}
						>
							HELENA
						</div>
						<div
							className="songArtist"
							style={{ backgroundColor: "white", color: "black" }}
						>
							My Chemical Romance
						</div>
					</SongCard>
					<div className="carouselButtons">
						<a href="/homepages/newJeansPage">
							<button className="circularButtonLeft mcrCircle">
								←
							</button>
						</a>
						<a href="/">
							<button className="circularButtonRight mcrCircle">
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

// mcr color sliver

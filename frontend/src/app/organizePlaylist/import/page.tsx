"use client";
// Standard Imports ------------------------------------------------------
import Image from "next/image";
import { useState, useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom';


// Component Imports ------------------------------------------------------
// import HomeImportButton from "@/components/Buttons/Buttons";
// // import {LightModeButton, DarkModeButton} from "@/components/Buttons/Buttons";
// import {RightPanel} from "@/components/MainBlocks/Panels";
import { SubmitButton } from "@/components/Buttons/Buttons";
import "@/components/Buttons/ColorSliver";
import "@/components/Navbar/Navbar";
import "@/components/SongCard/SongCard";


// CSS Imports ------------------------------------------------------
import "@/components/Buttons/Buttons.css";
import "@/components/MainBlocks/Decor.css";
import "@/components/MainBlocks/Panels.css";
import "@/components/Navbar/Navbar.css";
import "@/components/SongCard/SongCard.css";



// Asset Imports Imports ------------------------------------------------------
import "@/app/globals.css";
import googleLogo from "@/assets/images/googleLogo.png";
import mxrLogo from "@/assets/images/mxr.png";
import spotifyLogo from "@/assets/images/spotifyLogo.png";
import Navbar from "@/components/Navbar/Navbar";
// import { ColorSliver } from "@/components/Buttons/ColorSliver";





export default function Home() {
    return (
        <BrowserRouter>
            <div className="" style={{ width: "100vw", height: "auto" }}>
                <a href="/" className="mxrLogo"><Image src={mxrLogo} alt="Mixxer logo" title="Mixxer Logo" /></a>
                <Navbar style={{ backgroundColor: "#99acff", color: "#000000" }}></Navbar>
                <hr style={{ width: "100%", height: "1px", border: "3px solid #6b7bd0" }}></hr>
            </div>
            <div className="defaultDiv flexColumn" style={{ backgroundColor: "#2e2f33" }}>
                <h1 className="h1" style={{ marginTop: "-10vh" }}>Import Playlist</h1>

                <div className="flexRow" style={{ marginBottom: "2vh" }}>
                    <hr style={{ width: "22vw", height: "1px", border: "1px solid #9396a7", marginRight: "1vw" }}></hr>
                    <p className="p" style={{ color: "#9396a7", margin: "0%" }}>Import Methods</p>
                    <hr style={{ width: "22vw", height: "1px", border: "1px solid #9396a7", marginLeft: "1vw" }}></hr>
                </div>

                <div className="flexRow" style={{ marginBottom: "2vh", justifyContent: "center", gap: "2vw" }}>
                    <button className="loginSignupButton p textWithHover" type="submit" style={{ width: "17vw" }}>Import from Spotify</button>
                    <button className="loginSignupButton p textWithHover" type="submit" style={{ width: "17vw" }}>Import JSON</button>
                    <button className="loginSignupButton p textWithHover" type="submit" style={{ width: "17vw" }}>Import CSV</button>
                </div>

                <div className="flexRow" style={{ marginTop: "3vh", marginBottom: "2vh" }}>
                    <hr style={{ width: "22vw", height: "1px", border: "1px solid #9396a7", marginRight: "1vw" }}></hr>
                    <p className="p" style={{ color: "#9396a7", margin: "0%" }}>Organize Methods</p>
                    <hr style={{ width: "22vw", height: "1px", border: "1px solid #9396a7", marginLeft: "1vw" }}></hr>
                </div>

                <div className="flexRow" style={{ marginBottom: "1vh", justifyContent: "center", gap: "2vw" }}>
                    <button className="loginSignupButton p textWithHover" type="submit" style={{ width: "17vw" }}>Organize by Danceability</button>
                    <button className="loginSignupButton p textWithHover" type="submit" style={{ width: "17vw" }}>Organize by Genre</button>
                    <button className="loginSignupButton p textWithHover" type="submit" style={{ width: "17vw" }}>Organize by BPM</button>
                </div>

                <div className="flexRow" style={{ marginBottom: "2vh", justifyContent: "center", gap: "-10vw" }}>

                    <button className="p grayText" type="submit" style={{ width: "12vw", height: "6vh" }}>Ascending Order</button>
                    <button className="p grayText" type="submit" style={{ width: "12vw", height: "6vh" }}>Descending Order</button>
                </div>

                <SubmitButton link="/organizePlaylist/export" className="loginSignupButton p" style={{ backgroundColor: "#99acff", border: "5px solid #6b7bd0", marginTop: "1vh", marginBottom: "1vh" }}></SubmitButton>


            </div>
        </BrowserRouter>
    );
}



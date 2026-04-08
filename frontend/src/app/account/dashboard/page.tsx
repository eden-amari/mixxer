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
            <div className="defaultDiv flexColumn" style={{ backgroundColor: "#ffffff" }}>
                <h1 className="h1" style={{ marginTop: "-10vh", color: "#000000" }}>Welcome, [user]!</h1>
                <p className="p" style={{ color: "#9396a7", margin: "0%" }}>Here are your playlists.</p>





            </div>
        </BrowserRouter>
    );
}



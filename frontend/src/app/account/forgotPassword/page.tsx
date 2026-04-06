"use client";
// Standard Imports ------------------------------------------------------
import Image from "next/image";

import { BrowserRouter } from "react-router-dom";

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
import mxrLogo from "@/assets/images/mxr.png";
// import { ColorSliver } from "@/components/Buttons/ColorSliver";



export default function Home() {
  return (
    <BrowserRouter>
      <a href="/" className="mxrLogo"><Image src={mxrLogo} alt="Mixxer logo" title="Mixxer Logo" /></a>
      <div className="defaultDiv" style={{ backgroundColor: "black" }}>
        <div className="BigPanel flexColumn">

          <h2 className="h2" style={{ fontSize: "40px", marginBottom: "0.5vh" }}>Forgot your password?</h2>
          <p className="p" style={{ color: "#9396a7", marginBottom: "2vh" }}>Please enter the email address associated with your account.</p>


          {/* sign in form */}
          <form style={{ alignItems: "center", justifyContent: "center", display: "flex", flexDirection: "column" }}>
            <input name="userAndEmail" placeholder="Email Address" className="loginSignupButton p" />
            <SubmitButton className="loginSignupButton p" style={{ backgroundColor: "#99acff", border: "5px solid #6b7bd0", marginBottom: "2.5vh" }}></SubmitButton>
          </form>














        </div>



      </div>


    </BrowserRouter>
  );
}




/* const lightModeColors = {
  headings: "#000000",
  bubbleBackground: "#2e2f33",
  bubbleText: "#ffffff",
  grayText: "#9396a7",
  boxBackground: "#ffffff",
  fullBackground: "#2e2f33",
  accent1: "#99acff",
  accent2: "#6b7bd0",

};

const darkModeColors = {
  headings: "#ffffff",
  bubbleBackground: "#ffffff",
  bubbleText: "#000000",
  grayText: "#9396a7",
  boxBackground: "#2e2f33",
  fullBackground: "#000000",
  accent1: "#99acff",
  accent2: "#6b7bd0",

}; */

"use client";
// Standard Imports ------------------------------------------------------
import Image from "next/image";

import { BrowserRouter } from "react-router-dom";

// Component Imports ------------------------------------------------------
// import HomeImportButton from "@/components/Buttons/Buttons";
// // import {LightModeButton, DarkModeButton} from "@/components/Buttons/Buttons";
// import {RightPanel} from "@/components/MainBlocks/Panels";
import { Checkbox, SubmitButton } from "@/components/Buttons/Buttons";
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
// import { ColorSliver } from "@/components/Buttons/ColorSliver";



export default function Home() {
  return (
    <BrowserRouter>

      <div className="defaultDiv" style={{ backgroundColor: "black" }}>
        <a href="/" className="mxrLogo"><Image src={mxrLogo} alt="Mixxer logo" title="Mixxer Logo" /></a>
        <div className="BigPanel flexColumn" style={{ position: "absolute", border: "5px solid #99acff", backgroundColor: "#2e2f33", alignItems: "center", justifyContent: "center", gap: "3vh", padding: "5vh", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>

          {/* sign in title */}
          <div className="flexColumn" style={{ alignItems: "center", justifyContent: "center", marginTop: "-40px" }}>
            <h2 className="h2" style={{ fontSize: "40px" }}>Sign in with...</h2>
            {/* <div className="hr" style={{marginTop: "-25px", border: "1.5px solid #99acff", width: "80%"}}></div> */}


          {/* icons */}
          <div className="flexRow" style={{ marginTop: "-20px", padding: "20px", alignItems: "center", justifyContent: "center" }}>
            <div className="circularContainer"><Image className="smallIcon" src={spotifyLogo} alt="black Spotify logo" title="Spotify Logo" style={{ width: "1.75vw", height: "1.75vw" }} /></div>
            <div className="circularContainer"><Image className="smallIcon " src={googleLogo} alt="black Google logo" title="Google Logo" style={{ width: "1.75vw", height: "1.75vw" }} /></div>
          </div>

          <div className="flexRow" style={{ marginBottom: "0vh" }}>
            <hr style={{ width: "5vw", height: "1px", border: "1px solid #9396a7", marginRight: "1vw" }}></hr>
            <p className="p" style={{ color: "#9396a7", margin: "0%" }}>Or Sign In With</p>
            <hr style={{ width: "5vw", height: "1px", border: "1px solid #9396a7", marginLeft: "1vw" }}></hr>
          </div>

          {/* sign in form */}
          <form style={{ alignItems: "center", justifyContent: "center", display: "flex", flexDirection: "column" }}>
            <input name="userAndEmail" placeholder="Username/Email Address" className="loginSignupButton p" />
            <input name="password" placeholder="Password" className="loginSignupButton p" />

            <Checkbox></Checkbox>
            <SubmitButton className="loginSignupButton p" style={{ backgroundColor: "#99acff", border: "5px solid #6b7bd0", marginBottom: "1vh" }}></SubmitButton>
          </form>


          <a href="/account/signUp" className="p" style={{ color: "#9396a7" }}>Need to create an account?</a>

        </div>









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

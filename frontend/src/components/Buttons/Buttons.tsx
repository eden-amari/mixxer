"use client";
import React, { useState } from "react";
import ColorSliver from "./ColorSliver";
function HomeImportButton() {
	return (
		<div>
			<ColorSliver />
			<a href="/organizePlaylist/import">
				<button className="homeImportButton agrandir">
					Import Playlist
				</button>
			</a>
		</div>
	);
}
export default HomeImportButton;
// ---------------------------------------

type SubmitButtonProps = {
	className?: string;
	onClick?: () => void;
	disabled?: boolean;
	style?: React.CSSProperties;
	link?: string;
};
export function SubmitButton({
	className,
	onClick,
	disabled,
	style,
	link,
}: SubmitButtonProps) {
	const classes = ["SubmitButton", className, style, link]
		.filter(Boolean)
		.join(" ");
	return (
		<div>
			{/* <ColorSliver/> */}
			<a href={link}>
				<button
					type="submit"
					className={classes}
					onClick={onClick}
					disabled={disabled}
					style={style}
				>
					Submit
				</button>
			</a>
		</div>
	);
}

// ---------------------------------------
export function Checkbox() {
	const [checked, setchecked] = useState(false);
	return (
		<div
			style={{
				justifyContent: "space-between",
				display: "flex",
				width: "22vw",
				marginBottom: ".5vh",
				marginTop: "1vh",
			}}
		>
			<label className="p" style={{ color: "#9396a7" }}>
				<input
					style={{ marginLeft: "10px" }}
					type="checkbox"
					checked={checked}
					onChange={(e) => {
						setchecked(e.target.checked);
					}}
				/>{" "}
				Remember Me
			</label>

			<a
				href="/account/forgotPassword"
				className="forgotPassword p"
				style={{ color: "#9396a7" }}
			>
				Forgot Password?
			</a>
		</div>
	);
}

// ---------------------------------------
// type SubmitButtonProps = {
//   className?: string;
//   onClick?: () => void;
//   disabled?: boolean;
//   style?: React.CSSProperties;
// };
// export function SubmitButton({ className, onClick, disabled, style}: SubmitButtonProps) {
//   const classes = ["SubmitButton", className, style].filter(Boolean).join(" ");
//   return (
//     <div>

//       {/* <ColorSliver/> */}
//       <a href="/importPlaylist">
//         <button className={classes} onClick={onClick} disabled={disabled} style={style}>
//           <p className="p">Submit</p>
//         </button>
//       </a>
//     </div>
//   );
// }

// ---------------------------------------
// type LoginSignupProps = {
//     className?: string;
//   };

// ------------------------
// export function DarkModeButton() {
//   return (
//     <div>
//       <button className="darkModeButton agrandir" onClick={() => { isDarkMode = true; change2DarkMode(); }}>Dark Mode</button>

//     </div>

//   );
// }

// export function change2DarkMode() {
//   document.documentElement.style.setProperty('--headings', darkModeColors.headings);
//   document.documentElement.style.setProperty('--bubbleBackground', darkModeColors.bubbleBackground);
//   document.documentElement.style.setProperty('--bubbleText', darkModeColors.bubbleText);
//   document.documentElement.style.setProperty('--grayText', darkModeColors.grayText);
//   document.documentElement.style.setProperty('--boxBackground', darkModeColors.boxBackground);
//   document.documentElement.style.setProperty('--fullBackground', darkModeColors.fullBackground);
//   document.documentElement.style.setProperty('--accent1', darkModeColors.accent1);
//   document.documentElement.style.setProperty('--accent2', darkModeColors.accent2);

// }

// export function LightModeButton() {
//   return (
//     <button className="lightModeButton agrandir" onClick={() => change2LightMode()}>Light Mode</button>

//   );
// }

// export function change2LightMode() {
//   document.documentElement.style.setProperty('--headings', lightModeColors.headings);
//   document.documentElement.style.setProperty('--bubbleBackground', lightModeColors.bubbleBackground);
//   document.documentElement.style.setProperty('--bubbleText', lightModeColors.bubbleText);
//   document.documentElement.style.setProperty('--grayText', lightModeColors.grayText);
//   document.documentElement.style.setProperty('--boxBackground', lightModeColors.boxBackground);
//   document.documentElement.style.setProperty('--fullBackground', lightModeColors.fullBackground);
//   document.documentElement.style.setProperty('--accent1', lightModeColors.accent1);
//   document.documentElement.style.setProperty('--accent2', lightModeColors.accent2);
// }

// const lightModeColors = {
//   headings: "#000000",
//   bubbleBackground: "#2e2f33",
//   bubbleText: "#ffffff",
//   grayText: "#9396a7",
//   boxBackground: "#ffffff",
//   fullBackground: "#2e2f33",
//   accent1: "#99acff",
//   accent2: "#6b7bd0",

// };

// const darkModeColors = {
//   headings: "#ffffff",
//   bubbleBackground: "#ffffff",
//   bubbleText: "#000000",
//   grayText: "#9396a7",
//   boxBackground: "#2e2f33",
//   fullBackground: "#000000",
//   accent1: "#99acff",
//   accent2: "#6b7bd0",

// };

// export function colorChange() {
//   function handleClick() {
//     alert('You clicked me! Changing color now.');
//   }

//   if (isDarkMode) {
//     change2LightMode();
//   } else {
//     change2DarkMode();
//   }
//   isDarkMode = !isDarkMode;
// }

// export function ThemeToggle({ themeSwitch = f => f }) {
//   return (
//     <button
//       className="themeToggle"
//       type="button"
//       onClick={themeSwitch}
//       aria-label="change theme color"
//     />
//   )
// }

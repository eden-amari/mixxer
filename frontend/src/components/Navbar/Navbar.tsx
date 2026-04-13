"use client";
import { useState } from "react";
import "./Navbar.css";

type NavbarProps = {
	className?: string;
	style?: React.CSSProperties;
};

const Navbar = ({ className, style }: NavbarProps) => {

	return (
		<nav className={className} style={style}>
			<ul className="nav-links">
				<li className="li">
					<a href="/popNow">Popular Now</a>
				</li>
				<p className="li">|</p>
				<li className="li">
					<a href="/account/signIn">Sign In</a>
				</li>
				<p className="li">|</p>
				<li className="li">
					<a href="/account/signUp">Sign Up</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;

// export const DropdownMenu = () => {
//   return (
//     <div className="dropdown-menu">
//       <ul className='ddul'>
//         <li className='ddli'>Sign In</li>
//         <li className='ddli'>Sign Up</li>

//       </ul>
//     </div>
//   );
// };

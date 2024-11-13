import React from "react";
import "../../styles/navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (

		<div className="container">
			<nav className="navbar navbar-light bg-light mb-3">
				<Link to="/">
					<span className="navbar-brand mb-0 h1"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz7jBPm4whwbltDmhGppM3wrDulrt3nNvyGlC5_2TE87__TU_TArmnyUf1w-bDvFTgF84&usqp=CAU" /></span>
				</Link>
				<div className="ml-auto">
					<div className="btn-group" role="group">
						<button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
							Dropdown
						</button>
						<ul className="dropdown-menu">
							<li><a className="dropdown-item" href="#">Dropdown link</a></li>
							<li><a className="dropdown-item" href="#">Dropdown link</a></li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

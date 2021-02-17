import React from "react";
import { Link } from "react-router-dom";
import logoStarWars from "../../img/logoStarWars.png";
import { Single } from "../views/single";
import { DropdownButton, Dropdown } from "react-bootstrap";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-dark mb-1">
			<Link to="/">
				<span className="navbar-brand mb-0 ml-5 h1">
					<img className="LOGO  bg-light" src={logoStarWars} alt="LOGO" />
				</span>
			</Link>
			<div className="ml-5">
				<DropdownButton id="dropdown-basic-button" title="Favorites">
					<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
					<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
					<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
				</DropdownButton>
			</div>
		</nav>
	);
};

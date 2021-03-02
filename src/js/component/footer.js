import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center text-white">
		<p>
			FOLLOW ME <i className="far fa-thumbs-up" /> by <a href="https://twitter.com/JuanDiegoCoto1">DIEGO COTO</a>
		</p>
		<div>
			<Link to="/">
				<button className="btn btn-primary">Log out</button>
			</Link>
		</div>
	</footer>
);

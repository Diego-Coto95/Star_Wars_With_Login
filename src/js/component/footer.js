import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
	<div className="container">
		<footer className="footer mt-auto py-3 text-white">
			<div className="d-flex justify-content-between mr-5 ml-5">
				<div className="row justify-content-center align-self-center">
					<p>
						FOLLOW ME <i className="far fa-thumbs-up" /> by{" "}
						<a href="https://twitter.com/JuanDiegoCoto1">DIEGO COTO</a>
					</p>
				</div>
				<Link to="/">
					<button className="btn btn-primary bg-dark">
						<i className="fas fa-door-closed" />
					</button>
				</Link>
			</div>
		</footer>
	</div>
);

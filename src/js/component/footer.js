import React, { Component, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Redirect } from "react-router-dom";

export const Footer = () => {
	const { actions, store } = useContext(Context);

	return (
		<div className="container">
			<footer className="footer mt-auto py-3 text-white">
				<div className="d-flex justify-content-between mr-5 ml-5">
					<div className="row justify-content-center align-self-center">
						<p>
							FOLLOW ME <i className="far fa-thumbs-up" /> by{" "}
							<a href="https://twitter.com/JuanDiegoCoto1">DIEGO COTO</a>
						</p>
					</div>

					<button className="btn btn-primary bg-dark" onClick={actions.logout}>
						<i className="fas fa-door-closed" />
					</button>
					{store.boolean ? "" : <Redirect to="/" />}
				</div>
			</footer>
		</div>
	);
};

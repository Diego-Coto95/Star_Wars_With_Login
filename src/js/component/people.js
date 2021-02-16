import React from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { Card, CardImg, Button, Col, Row } from "react-bootstrap";

export const People = () => {
	return (
		<div className="container text-center mt-5">
			<Card style={{ width: "18rem" }}>
				<Card.Img
					variant="top"
					src="https://images.unsplash.com/photo-1472457847783-3d10540b03d7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
				/>
				<Card.Body>
					<Card.Title>Card Title</Card.Title>
					<Card.Text>
						Some quick example text to build on the card title and make up the bulk of the cards content.
					</Card.Text>
					<Link to="/descriptionPeople/whatever">
						<Button variant="primary mr-4">Learn more!</Button>
					</Link>
					<Button variant="outline-warning ml-5">
						<i className="far fa-heart" />
					</Button>
				</Card.Body>
			</Card>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};

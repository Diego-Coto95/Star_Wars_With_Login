import React from "react";
import "../../styles/index.scss";
import { Link } from "react-router-dom";
import { Card, ButtonToolbar, CardGroup, Button } from "react-bootstrap";

export const Planets = () => {
	return (
		<div className="container d-flex flex-column text-center">
			<div className="mt-5 d-flex" style={{ overflowX: "scroll", width: "1100px", height: "600px" }}>
				{Array.from({ length: 10 }).map((_, index) => (
					<Card key={index} style={{ minWidth: "20rem", margin: "15px" }}>
						<Card.Img
							variant="top h-50"
							src="https://images.unsplash.com/photo-1556988680-40f0449b35e9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1055&q=80"
						/>
						<Card.Body>
							<Card.Title className="text-center">Card Title</Card.Title>
							<Card.Text>
								<tr>
									<td>Population: </td>
								</tr>
								<tr>
									<td>Gravity: </td>
								</tr>
								<tr>
									<td>Terrain: </td>
								</tr>
							</Card.Text>
						</Card.Body>
						<Card.Footer>
							<ButtonToolbar className="justify-content-between" arial-label="Toolbar with Button groups">
								<Link to="/descriptionPlanets/whatever">
									<Button variant="primary">Learn More!</Button>
								</Link>
								<Link>
									<Button variant="outline-warning">
										<i className="far fa-heart" />
									</Button>
								</Link>
							</ButtonToolbar>
						</Card.Footer>
					</Card>
				))}
			</div>
			<div>
				<Link to="/">
					<button className="btn btn-primary mt-4" style={{ top: "15" }}>
						Back home
					</button>
				</Link>
			</div>
		</div>
	);
};

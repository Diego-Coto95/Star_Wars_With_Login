import React from "react";
import { Link } from "react-router-dom";
import { Container, ButtonToolbar, Row, Col, Card, Button } from "react-bootstrap";
import "../../styles/index.scss";

export const People = () => (
	<Container className="container" fluid>
		<Row>
			{Array.from({ length: 12 }).map((_, index) => (
				<Col key={index} md={4} className="mt-1 mb-1">
					<Card>
						<Card.Img
							variant="top"
							src="https://images.unsplash.com/photo-1472457847783-3d10540b03d7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
						/>
						<Card.Body>
							<Card.Title className="text-center">Card title</Card.Title>
							<Card.Text>
								<tr>
									<td>Gender: </td>
								</tr>
								<tr>
									<td>Hair-Color: </td>
								</tr>
								<tr>
									<td>Eye-Color: </td>
								</tr>
							</Card.Text>
						</Card.Body>
						<Card.Footer>
							<ButtonToolbar className="justify-content-between" arial-label="Toolbar with Button groups">
								<Link to="/descriptionPeople/whatever">
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
				</Col>
			))}
			;
		</Row>
	</Container>
);

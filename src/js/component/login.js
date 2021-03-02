import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Form, Col, Row, Button } from "react-bootstrap";

export const Main = () => {
	return (
		<div className="container text-center" fluid>
			<Form>
				<Form.Row>
					<Form.Group as={Col} controlId="formGridEmail">
						<Form.Label>Email</Form.Label>
						<Form.Control type="email" placeholder="someuser@gmail.com" />
					</Form.Group>

					<Form.Group as={Col} controlId="formGridPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" placeholder="Password" />
					</Form.Group>
				</Form.Row>

				<Form.Group controlId="formGridAddress1">
					<Form.Label>Name</Form.Label>
					<Form.Control placeholder="Write your name" />
				</Form.Group>
				<Link to="/Menu">
					<Button variant="primary" type="submit">
						Submit
					</Button>
				</Link>
			</Form>
		</div>
	);
};

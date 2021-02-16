import React from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { Container, CardImg, Button, Image, Col, Row } from "react-bootstrap";

export const DescriptionPeople = () => {
	return (
		<Container>
			<Row>
				<Col xs={6} md={4}>
					<Image
						className="Ima w-100 h-100"
						src="https://images.unsplash.com/photo-1518331647614-7a1f04cd34cf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80"
						style={{ width: "100px", height: "100px" }}
						rounded
					/>
				</Col>

				<Col xs={6} md={4}>
					<Image src="holder.js/171x180" thumbnail />
				</Col>
			</Row>
			<hr className="border border-bottom-0.5" />
			<br />
			<div className="col text-center">
				<Link to="/">
					<button className="btn btn-primary">Back home</button>
				</Link>
			</div>
		</Container>
	);
};

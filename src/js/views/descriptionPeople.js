import React from "react";
import "../../styles/index.scss";
import { Link } from "react-router-dom";
import { Card, Container, Table, CardImg, Button, Image, Col, Row } from "react-bootstrap";

export const DescriptionPeople = () => {
	return (
		<div className="mt-5">
			<Container>
				<Row>
					<Col xs={6} md={5}>
						<Image
							className=" w-100 h-100"
							src="https://images.unsplash.com/photo-1518331647614-7a1f04cd34cf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80"
							style={{ width: "100px", height: "100px" }}
							rounded
						/>
					</Col>

					<Col xs={6} md={4}>
						<div>
							<Card border="light" style={{ width: "40rem" }}>
								<div className="text-center">
									<Card.Header>Character</Card.Header>
								</div>
								<Card.Body>
									<div className="text-center">
										<Card.Title>Title</Card.Title>
									</div>
									<Card.Text>
										Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
										Ipsum has been the industrys standard dummy text ever since the 1500s, when an
										unknown printer took a galley of type and scrambled it to make a type specimen
										book. It has survived not only five centuries, but also the leap into electronic
										typesetting, remaining essentially unchanged. It was popularised in the 1960s
										with the release of Letraset sheets containing Lorem Ipsum passages, and more
										recently with desktop publishing software like Aldus PageMaker including
										versions of Lorem Ipsum
									</Card.Text>
								</Card.Body>
							</Card>
							<br />
						</div>
					</Col>
				</Row>
				<hr className="border border-bottom-0.5" />
				<div className="text-light">
					<Table responsive>
						<thead className="text-white">
							<tr>
								<th>Name</th>
								<th>Birth</th>
								<th>Gender</th>
								<th>Height</th>
								<th>Skin</th>
								<th>Eye-Color</th>
							</tr>
						</thead>
						<tbody>
							<tr className="text-white">
								<td>...</td>
								<td>...</td>
								<td>...</td>
								<td>...</td>
								<td>...</td>
								<td>...</td>
							</tr>
						</tbody>
					</Table>
				</div>
				<br />
				<div className="col text-center">
					<Link to="/">
						<button className="btn btn-primary">Back home</button>
					</Link>
				</div>
			</Container>
		</div>
	);
};

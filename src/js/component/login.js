import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Form, Col, Row, Button, Card, Accordion } from "react-bootstrap";

export const Main = () => {
	return (
		<div className="container log text-center d-flex justify-content-center " fluid>
			<Card style={{ width: "18rem" }} className="w-50 h-50 mt-3">
				<Card.Img
					variant="top"
					src="https://images.unsplash.com/photo-1598501479146-ef2b41258663?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"
				/>
				<Card.Body>
					<Card.Title>WELCOME!</Card.Title>
					<Card.Text>
						<div className="container text-center " fluid>
							<Accordion defaultActiveKey="0">
								<Card>
									<Card.Header>
										<Accordion.Toggle as={Button} variant="link" eventKey="0">
											Log in!
										</Accordion.Toggle>
									</Card.Header>
									<Accordion.Collapse eventKey="0">
										<Card.Body>
											<div className="text-center">
												<Form>
													<Form.Row>
														<Form.Group as={Col} controlId="formGridEmail">
															<Form.Label>Email</Form.Label>
															<Form.Control
																type="email"
																placeholder="someuser@gmail.com"
															/>
														</Form.Group>

														<Form.Group as={Col} controlId="formGridPassword">
															<Form.Label>Password</Form.Label>
															<Form.Control type="password" placeholder="Password" />
														</Form.Group>
													</Form.Row>
													<Link to="/Menu">
														<Button variant="primary" type="submit">
															Log in
														</Button>
													</Link>
												</Form>
											</div>
										</Card.Body>
									</Accordion.Collapse>
								</Card>
								<Card>
									<Card.Header>
										<Accordion.Toggle as={Button} variant="link" eventKey="1">
											Sign in!
										</Accordion.Toggle>
									</Card.Header>
									<Accordion.Collapse eventKey="1">
										<Card.Body>
											<div className="text-center">
												<Form>
													<Form.Group controlId="formGridAddress1">
														<Form.Label>Name</Form.Label>
														<Form.Control placeholder="Write your name" />
													</Form.Group>
													<Form.Row>
														<Form.Group as={Col} controlId="formGridEmail">
															<Form.Label>Email</Form.Label>
															<Form.Control
																type="email"
																placeholder="someuser@gmail.com"
															/>
														</Form.Group>

														<Form.Group as={Col} controlId="formGridPassword">
															<Form.Label>Password</Form.Label>
															<Form.Control type="password" placeholder="Password" />
														</Form.Group>
													</Form.Row>
													<Button variant="primary" type="submit">
														Submit
													</Button>
												</Form>
											</div>
										</Card.Body>
									</Accordion.Collapse>
								</Card>
							</Accordion>
						</div>
					</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
};

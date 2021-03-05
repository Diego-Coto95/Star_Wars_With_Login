import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Form, Col, Row, Button, Card, Accordion, footer } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { Context } from "../store/appContext";

export const Main = () => {
	const { actions, store } = useContext(Context);
	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");
	const [redirect, setRedirect] = useState(false);

	//**********************************************LOG  IN**********************************************//
	const handleSubmitLogin = e => {
		e.preventDefault();
		if (email === "" || pass === "") {
			alert("Correo y contraseña son requeridos");
		} else {
			console.log(email, pass);
			actions.validateLogin(email, pass);
		}
	};
	// //**********************************************SIGN iN**********************************************//
	const handleSubmitRegister = e => {
		e.preventDefault();
		if (email === "" || pass === "") {
			alert("Correo y contraseña son requeridos");
		} else {
			console.log(email, pass);
			actions.validateRegister(email, pass);
			setEmail;
		}
	};

	// const testPrivado = () => {
	// 	actions.validateLogin(email, pass);
	// 	//actions.validateToken();
	// };

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
												<Form onSubmit={e => handleSubmitlogin(e)}>
													<Form.Row>
														<Form.Group as={Col} controlId="formGridEmail">
															<Form.Label>Email</Form.Label>
															<Form.Control
																type="email"
																placeholder="someuser@gmail.com"
																onChange={e => setEmail(e.target.value)}
															/>
														</Form.Group>

														<Form.Group as={Col} controlId="formGridPassword">
															<Form.Label>Password</Form.Label>
															<Form.Control
																type="password"
																placeholder="Password"
																onChange={e => setPass(e.target.value)}
															/>
														</Form.Group>
													</Form.Row>
													<Button
														variant="primary"
														type="submit"
														onClick={e => handleSubmitLogin(e)}>
														Log in
													</Button>
												</Form>
												{store.boolean ? <Redirect to="/Menu" /> : ""}
											</div>
										</Card.Body>
									</Accordion.Collapse>
								</Card>
								<Card>
									<Card.Header>
										<Accordion.Toggle as={Button} variant="link" eventKey="1">
											Sign up!
										</Accordion.Toggle>
									</Card.Header>
									<Accordion.Collapse eventKey="1">
										<Card.Body>
											<div className="text-center">
												<Form onSubmit={e => handleSubmitRegister(e)}>
													<Form.Row>
														<Form.Group as={Col} controlId="formGridEmail">
															<Form.Label>Email</Form.Label>
															<Form.Control
																type="email"
																placeholder="someuser@gmail.com"
																onChange={e => setEmail(e.target.value)}
															/>
														</Form.Group>

														<Form.Group as={Col} controlId="formGridPassword">
															<Form.Label>Password</Form.Label>
															<Form.Control
																type="password"
																placeholder="Password"
																onChange={e => setPass(e.target.value)}
																value={pass}
															/>
														</Form.Group>
													</Form.Row>
													<Button
														variant="primary"
														type="submit"
														onClick={e => handleSubmitRegister(e)}>
														Sign up
													</Button>
												</Form>
												{/* {redirect ? <Redirect to="/login" /> : ""} */}
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

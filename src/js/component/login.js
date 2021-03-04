import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Form, Col, Row, Button, Card, Accordion, footer } from "react-bootstrap";
// import { Redirect } from "react-router-dom";

export const Main = () => {
	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");
	//const [redirect, setRedirect] = useState(false);

	//**********************************************LOG  IN**********************************************//
	const handleSubmitlogin = e => {
		e.preventDefault();
		if (email === "" || pass === "") {
			alert("Correo y contraseña son requeridos");
		}
		console.log(email, pass);

		// FETCH
		const data = { email: email, password: pass }; // Objeto que me manejara los fields que se van a ingresar en el register y login

		fetch("https://3000-indigo-duck-4s99l8l5.ws-us03.gitpod.io/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json" //Lo que se va a enviar es json, por eso se pone el header
			},
			body: JSON.stringify(data) //Convierte todo a un String , se envia como stringfy porque en el back end, se recibe como "email", "password"
		})
			.then(response => response.json())
			.then(data => {
				console.log("Success:", data); //imprime la data, si se registro o no se registro
				sessionStorage.setItem("u_token", data.token);
				//setRedirect(true);
			})
			.catch(error => {
				console.error("Error:", error); //Cualquier error que pueda ocurrir
			});

		// setRedirect(true);
	};
	// //**********************************************SIGN iN**********************************************//
	const handleSubmitRegister = e => {
		e.preventDefault();
		if (email === "" || pass === "") {
			alert("Correo y contraseña son requeridos");
		}
		console.log(email, pass);

		// FETCH
		const data = { email: email, password: pass };

		fetch("https://3000-indigo-duck-4s99l8l5.ws-us03.gitpod.io/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		})
			.then(response => response.json())
			.then(data => {
				console.log("Success:", data);
				//setRedirect(true);
			})
			.catch(error => {
				console.error("Error:", error);
			});

		// setRedirect(true);
	};

	const testPrivado = () => {
		fetch("https://3000-indigo-duck-4s99l8l5.ws-us03.gitpod.io/profile", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + sessionStorage.getItem("u_token")
			}
			// body: JSON.stringify(data)
		})
			.then(response => response.json())
			.then(data => {
				console.log("Success:", data);
				// sessionStorage.setItem("u_token", data.token);
				// setRedirect(true);
			})
			.catch(error => {
				console.error("Error:", error);
			});
	};

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
													{/* <Link to="/Menu"> */}
													<Button
														variant="primary"
														type="submit"
														onClick={() => testPrivado()}>
														Log in
													</Button>
													{/* </Link> */}
												</Form>
												{/* {redirect ? <Redirect to="/login" /> : ""} */}
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
															/>
														</Form.Group>
													</Form.Row>
													<Button variant="primary" type="submit">
														Sign in
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

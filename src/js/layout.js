import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./views/home";
import { DescriptionPeople } from "./views/descriptionPeople";
import { Context } from "./store/appContext";
import { DescriptionPlanets } from "./views/descriptionPlanets";
import injectContext from "./store/appContext";

import { Main } from "./component/login";
import { Menu } from "./component/navbar";
import { People } from "./component/people";
import { Planets } from "./component/planets";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.loadPeople();
		actions.loadPlanet();
	}, []);

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<Switch>
					<Route exact path="/">
						<Main />
					</Route>
					<Route exact path="/Menu">
						<Menu />
						<Home />
						<Footer />
					</Route>
					<Route exact path="/people/:theid">
						<Menu />
						<People info={store.people} />
						<Footer />
					</Route>
					<Route exact path="/descriptionPeople/:theid">
						<Menu />
						<DescriptionPeople />
						<Footer />
					</Route>
					<Route exact path="/planets/:theid">
						<Menu />
						<Planets info={store.planets} />
						<Footer />
					</Route>
					<Route exact path="/descriptionPlanets/:theid">
						<Menu />
						<DescriptionPlanets />
						<Footer />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { DescriptionPeople } from "./views/descriptionPeople";
import { DescriptionPlanets } from "./views/descriptionPlanets";
import { Demo } from "./views/demo";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { People } from "./component/people";
import { Planets } from "./component/planets";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/people/:theid">
							<People />
						</Route>
						<Route exact path="/descriptionPeople/:theid">
							<DescriptionPeople />
						</Route>
						<Route exact path="/planets/:theid">
							<Planets />
						</Route>
						<Route exact path="/descriptionPlanets/:theid">
							<DescriptionPlanets />
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);

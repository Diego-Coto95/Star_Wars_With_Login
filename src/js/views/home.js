import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { Carousel, CarouselItem, CarouselItemProps, CarouselProps, Caption } from "react-bootstrap";
import { Single } from "../views/single";
//import { Carousel } from "../component/carousel";

export const Home = () => (
	<div className="container text-center mt-5">
		<Carousel>
			<Carousel.Item interval={2000}>
				<Link to="../views/single">
					<img
						className="d-block w-100"
						src="https://images5.alphacoders.com/672/672012.jpg"
						alt="Characters"
					/>
					<Carousel.Caption>
						<h3>Personajes</h3>
						<p>Descripcion de personajes</p>
					</Carousel.Caption>
				</Link>
			</Carousel.Item>
			<Carousel.Item interval={2000}>
				<Link to="/planets">
					<img className="d-block w-100" src="https://images5.alphacoders.com/388/388257.jpg" alt="Planets" />
					<Carousel.Caption>
						<h3>Planetas</h3>
						<p>Descripcion de planetas</p>
					</Carousel.Caption>
				</Link>
			</Carousel.Item>
		</Carousel>
	</div>
);

import React, { useEffect } from "react";
import "../css/home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import gsap from "gsap";
import { FaLongArrowAltRight } from "react-icons/fa";

function Home() {
	useEffect(() => {
		gsap.to(".presentation", {
			startAt: { opacity: 0 },
			opacity: 1,
			x: 0,
			duration: 5,
		});
	}, []);

	return (
		<section id="Acceuil" className="h-100 w-100">
			<div className="header d-flex justify-content-between mt-5">
				<div className="name-title d-flex flex-column mx-5 mt-5">
					<span className="nom fw-semibold">PRADELLE Jean-Baptiste</span>
					<span className="devweb fw-bold mt-2">DEVELOPPEUR WEB</span>
				</div>

				<img
					src={`${process.env.PUBLIC_URL}/image/homme.jpg`}
					className="photohomme img-fluid w-25 h-25 rounded opacity-75 mx-auto  mt-5"
					alt="homme devant ordinateur"
				/>
			</div>
			<div className="presentation-container d-flex flex-column justify-content-center align-items-center mt-3 pt-3">
				<span className="presentation col-10 d-flex justify-content-center fs-4">
					Enchanté! Mon nom est Jean-Baptiste, je suis un développeur full-stack
					basé à Clermont-Ferrand. Passionné par le développement web depuis
					toujours je suis à votre disposition pour réaliser tous vos projets.
				</span>
			</div>
			<div className="arrow-container d-flex justify-content-center mt-5">
				<FaLongArrowAltRight style={{ height: "6em", width: "6em" }} />
			</div>
		</section>
	);
}

export default Home;

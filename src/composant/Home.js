import React, { useEffect } from "react";
import "../css/home.css";
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
			<div className="d-flex flex-row  mt-5">
				<span className="fs-3 mx-5 fw-semibold mt-5 flex-shrink-0">PRADELLE Jean-Baptiste</span>
				<span className="fs-1 fw-bold pb-5 pt-3 mt-2 mx-5 flex-shrink-0 align-self-end">DEVELOPPEUR WEB</span>
				<img
					src={`${process.env.PUBLIC_URL}/image/homme.jpg`}
					className="img-fluid w-25 h-25 rounded-bottom me-5 flex-shrink-0 opacity-75"
					alt="homme devant ordinateur"
				/>
			</div>
			<div className="d-flex flex-column justify-content-center m-5"></div>
			<div className="d-flex flex-column justify-content-center align-content-center">
				<span className="presentation col-10 d-flex justify-content-center mx-auto fs-4 pt-5 mt-5">
					Enchanté! Mon nom est Jean-Baptiste, je suis un développeur full-stack basé à Clermont-Ferrand. Passionné par le développement web depuis toujours je suis à votre disposition pour réaliser tous vos projets.
				</span>
			</div>
			<div className="arrow-container fw-bold">
				<FaLongArrowAltRight style={{ height: "6em", width: "6em" }} />
			</div>
		</section>
	);
}

export default Home;
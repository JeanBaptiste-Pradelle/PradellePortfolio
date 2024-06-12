import React, { useEffect } from "react";
import "../css/Temoignage.css";
import gsap from "gsap";

function Temoignage() {
  useEffect(() => {
    gsap.to(".temoinTitre", { startAt: { y: -200 }, y: 0, duration: 3, ease: "bounce.out" });
  }, []);

  return (
    <section
      id="temoin"
      className="temoinSection w-100 h-100 d-flex flex-column align-items-center justify-content-center position-relative"
    >
      <div className="header d-flex w-100 align-items-center justify-content-evenly position-absolute top-0 start-25 mb-5 mt-2 pb-3 ms-4">
        <img
          src={`${process.env.PUBLIC_URL}/image/homme2.jpg`}
          className="photohomme2 img-fluid rounded-4 opacity-75 ms-3"
          alt="homme devant ordinateur"
        />
        <h1 className="temoinTitre my-2 p-2 display-5 text-center text-black">
          Temoignages
        </h1>
       
      </div>
      <div className="d-flex flex-row col-10 flex-wrap justify-content-center mt-5 pt-5">
        <div className="temoignage1 col-10 col-md-4 text-white mx-2 my-2 p-2 border border-2 border-black rounded-4 ">
          <h2>Temoignage 1</h2>
          <span className="fs-5">
            Ceci est le 1er Temoignage d'une longue série
          </span>
        </div>
        <div className="temoignage2 col-10 col-md-4 text-white mx-2 my-2 p-2 border border-2 border-black rounded-4 ">
          <h2>Temoignage 2</h2>
          <span className="fs-5">
            Ceci est le 2eme Temoignage d'une longue série
          </span>
        </div>
     
      </div>
    </section>
  );
}

export default Temoignage;
import React from "react";
import perfumeImg from "../assets/perfume.png"; // заміни на свою картинку

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-text">
        <h1>Difiscent - це оригінальна парфюмерія</h1>
      </div>
      <img src={perfumeImg} alt="Perfume" />
    </section>
  );
}

export default Hero;

import React from "react";

import heroImg from "../assets/hero.svg";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Projects</h1>
          <p>
            Never forget that your journey is unique to you. While others may
            walk different paths, you are on your own journey of self-discovery
            and growth. The obstacles you face are part of the story that will
            make you stronger. No one else can walk your path for you, and no
            one else can define your success. Only you have the power to create
            the life you want.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

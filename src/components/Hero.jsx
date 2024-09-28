import React from "react";
import "../styles/hero.css";

const Hero = ({ setSection }) => {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <h1 id="animatedText">Welcome.</h1>
          <p>
            My name is Prajakta Nisal, graduate student at the University of
            Texas, Arlington.
          </p>
          <div className="hero-tabs">
            <div
              className="hero-tab"
              onClick={() => {
                console.log("switching to experience");
                setSection("experience");
              }}
            >
              Experiences
            </div>
            <div
              className="hero-tab"
              onClick={() => {
                console.log("switching to project");
                setSection("project");
              }}
            >
              Projects
            </div>
            <div
              className="hero-tab"
              onClick={() => {
                console.log("switching to education");
                setSection("education");
              }}
            >
              Education
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src="/img.avif" alt="hero"></img>
        </div>
      </div>
    </section>
  );
};

export default Hero;

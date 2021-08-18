import React from "react";
import MultiplePizzas from "../assets/pizza-7.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        Since 1986, Bianca´s Pizzeria has been greeting guests in the North End of U.S.A with the best quality and flavor
          and has been inspired by the love of good food and the special pride of the Mainella Family.
          <br />
         Authentic Family Style Cuisine with a secret century old recipe uses a special natural yeast and is aged to perfection.
         <br />
         Bianca´s Pizzeria has freshest and finest vegetables and meats, no preservatives, no additives, just fresh natural foods bursting with flavor.
        </p>
      </div>
    </div>
  );
}

export default About;

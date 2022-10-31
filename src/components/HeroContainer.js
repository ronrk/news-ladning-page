import React from "react";
import Wrapper from "./styles/Hero.Styled";
import heroImage from "../assets/images/image-web-3-desktop.jpg";

const HeroContainer = () => {
  return (
    <Wrapper>
      <img src={heroImage} alt="hero logo" />
      <div className="title">
        <h1>The Bright Future of Web 3.0?</h1>
      </div>
      <div className="content">
        <p>
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <button>Read more</button>
      </div>
    </Wrapper>
  );
};

export default HeroContainer;

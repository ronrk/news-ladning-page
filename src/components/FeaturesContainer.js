import React from "react";
import Wrapper from "./styles/Features.Styled";
import img1 from "../assets/images/image-retro-pcs.jpg";
import img2 from "../assets/images/image-top-laptops.jpg";
import img3 from "../assets/images/image-gaming-growth.jpg";

const FeaturesContainer = () => {
  return (
    <Wrapper>
      <div className="feature">
        <img src={img1} alt="feature 1" />
        <div className="content">
          <h4>01</h4>
          <h5>Reviving Retro PCs</h5>
          <p>What happens when old PCs are given modern upgrades?</p>
        </div>
      </div>

      <div className="feature">
        <img src={img2} alt="feature 1" />
        <div className="content">
          <h4>02</h4>
          <h5>Top 10 Laptops of 2022</h5>
          <p>Our best picks for various needs and budgets.</p>
        </div>
      </div>

      <div className="feature">
        <img src={img3} alt="feature 1" />
        <div className="content">
          <h4>03</h4>
          <h5>The Growth of Gaming</h5>
          <p>How the pandemic has sparked fresh opportunities.</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default FeaturesContainer;

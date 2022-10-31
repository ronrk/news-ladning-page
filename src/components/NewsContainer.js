import React from "react";
import Wrapper from "./styles/News.Styled";

const NewsContainer = () => {
  return (
    <Wrapper>
      <div className="title">
        <h3>New</h3>
      </div>
      <div className="new">
        <p>
          <span>Hydrogen VS Electric Cars</span>Will hydrogen-fueled cars ever
          catch up to EVs?
        </p>
      </div>
      <div className="new">
        <p>
          <span>The Downsides of AI Artistry</span>What are the possible adverse
          effects of on-demand AI image generation?
        </p>
      </div>
      <div className="new">
        <p>
          <span>Is VC Funding Drying Up?</span>Private funding by VC firms is
          down 50% YOY. We take a look at what that means.
        </p>
      </div>
    </Wrapper>
  );
};

export default NewsContainer;

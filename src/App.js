import React from "react";
import HeroContainer from "./components/HeroContainer";
import FeaturesContainer from "./components/FeaturesContainer";
import Header from "./components/Header";
import NewsContainer from "./components/NewsContainer";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <HeroContainer />
        <NewsContainer />
        <FeaturesContainer />
      </main>
    </>
  );
};

export default App;

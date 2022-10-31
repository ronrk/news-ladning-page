import React from "react";
import Wrapper from "./styles/Header.Styled";
import logo from "../assets/images/logo.svg";

const Header = () => {
  return (
    <Wrapper>
      <img src={logo} alt="logo" />
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">New</a>
        </li>
        <li>
          <a href="#">Popular</a>
        </li>
        <li>
          <a href="#">Trending</a>
        </li>
        <li>
          <a href="#">Categories</a>
        </li>
      </ul>
    </Wrapper>
  );
};

export default Header;

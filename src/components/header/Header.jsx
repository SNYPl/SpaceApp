import React from "react";
import "./header.scss";
import Navigation from "./navigation/Navigation";
import HeaderInfo from "./headerInfo/HeaderInfo";

const Header = () => {
  return (
    <header className="header">
      <Navigation />
      <HeaderInfo />
    </header>
  );
};

export default Header;

import React from "react";
import "./footer.scss";
import { FooterRocketSvg } from "../../common/svg/footer";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer--image">
        <FooterRocketSvg />
      </div>
      <p className="footer--title">Exciting space adventure!</p>
    </footer>
  );
};

export default Footer;

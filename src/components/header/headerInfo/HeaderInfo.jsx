import React from "react";
import "./headerInfo.scss";
import earhImg from "../../../asset/images/header/header-earth.png";
import Button from "../../button/Button";
import retangle from "../../../asset/images/header/rectanle.png";

const HeaderInfo = () => {
  return (
    <section className="header--info">
      <img src={retangle} alt="rectangle" className="rectangle" />
      <div className="header--info--image">
        <img src={earhImg} alt="earth" />
      </div>
      <div className="info">
        <h1 className="info--title">
          Discover the vast expanses of <span>space</span>
        </h1>
        <p className="info--paragraph">
          Where the possibilities are <span>endless</span>!
        </p>
        <Button className="info--button">Learn more</Button>
      </div>
    </section>
  );
};

export default HeaderInfo;

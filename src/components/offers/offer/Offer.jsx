import React from "react";
import "./offers.scss";

const Offer = () => {
  return (
    <article className="offer">
      <img src="" alt="offer" />
      <h2 className="offer--title">
        Discover the vast expanses of <span>space</span>
      </h2>
      <p className="offer--paragraph">
        Where the possibilities are <span>endless</span>!
      </p>
      <Button className="offer--button">Learn more</Button>
    </article>
  );
};

export default Offer;

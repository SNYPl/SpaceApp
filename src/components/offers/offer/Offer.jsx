import React from "react";
import "./offer.scss";
import Button from "../../button/Button";

const Offer = ({ title, paragraph, image }) => {
  return (
    <article className="offer" style={{ backgroundImage: `url(${image})` }}>
      <h2 className="offer--title">{title}</h2>
      <p className="offer--paragraph">{paragraph}</p>
      <Button className="offer--button">Learn more</Button>
    </article>
  );
};

export default Offer;

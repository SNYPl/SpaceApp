import React from "react";
import "./offers.scss";
import { offers } from "../../lib/offers";
import Offer from "./offer/Offer";

const Offers = () => {
  return (
    <section className="offers">
      <h2 className="offers--title">Offers</h2>
      <div className="offers--container">
        {offers.map((offer, id) => {
          return (
            <Offer
              title={offer.title}
              paragraph={offer.paragraph}
              image={offer.background}
              key={id}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Offers;

import React from "react";
import "./offers.scss";
import { offers } from "../../lib/offers";
import Offer from "./offer/Offer";

const Offers = () => {
  return (
    <section className="offers">
      <h2>Offers</h2>
      <Offer />
    </section>
  );
};

export default Offers;

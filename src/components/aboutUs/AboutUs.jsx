import React, { useState } from "react";
import "./aboutUs.scss";

const AboutUs = () => {
  const [readMore, setReadMore] = useState(false);
  return (
    <section className="about">
      <h3 className="about--title">Embark on a space journey</h3>
      <p className={`about--info ${readMore ? "about--info--more" : ""}`}>
        Travelling into space is one of the most exciting and unforgettable
        adventures that can change your life forever. And if you have ever
        dreamed of exploring stars, planets and galaxies, then our company is
        ready to help you realize this dream. We offer a unique experience that
        will allow you to go on a space journey and see all the secrets of the
        universe. We guarantee that every moment in space will be filled with
        incredible impressions, excitement and new discoveries. Our team of
        professionals takes care of your safety and comfort so that you can
        fully enjoy your adventure in space. We offer various options for space
        excursions.
      </p>
      <p className="about--link" onClick={() => setReadMore(!readMore)}>
        {readMore ? "Read less" : "Read more"}
      </p>
    </section>
  );
};

export default AboutUs;

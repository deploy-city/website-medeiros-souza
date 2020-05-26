import React from "react";

import about from "../../../../assets/images/about.jpg";

import { Container } from "./styles";

function About() {
  return (
    <Container id="about">
      <img src={about} alt="About" />

      <div>
        <p>
          <strong>MEDEIROS SOUZA Corp</strong> is a tax and accounting firm
          based in the heart of Orlando, FL, providing services nationwide. We
          do not outsource any of our tax and accounting services.
        </p>

        <p>
          Our international client base is spread over 25 countries, with a mix
          of individual and corporate ownership in US-based investment. Medeiros
          Souza is well equipped to handle even the most complex filings to
          federal and state authorities. Our team of experienced, committed
          professionals and our substantial investment in technology provide for
          excellent service and communication, deep expertise, and an
          environment our clients and associates want to be a part of.
        </p>
      </div>
    </Container>
  );
}

export default About;

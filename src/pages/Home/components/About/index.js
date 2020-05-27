import React from "react";
import { useTranslation } from "react-i18next";

import about from "../../../../assets/images/about.jpg";

import { Container } from "./styles";

function About() {
  const { t } = useTranslation();

  return (
    <Container id="about">
      <img src={about} alt="About" />

      <div>
        <p dangerouslySetInnerHTML={{ __html: t("AboutText") }}></p>
      </div>
    </Container>
  );
}

export default About;

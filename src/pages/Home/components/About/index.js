import React from "react";
import { useTranslation } from "react-i18next";

import SideTag from "../../../../components/SideTag";

import about from "../../../../assets/images/about.jpg";

import { Container } from "./styles";

function About() {
  const { t } = useTranslation();

  return (
    <Container id="about">
      <SideTag side="left">
        <strong>{t("About").split(" ")[0]}</strong>
      </SideTag>
      <img src={about} alt="About" />

      <div>
        <p dangerouslySetInnerHTML={{ __html: t("AboutText") }}></p>
      </div>
    </Container>
  );
}

export default About;

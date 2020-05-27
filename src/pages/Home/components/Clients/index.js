import React from "react";
import { MdArrowForward } from "react-icons/md";
import { useTranslation } from "react-i18next";

import SideTag from "../../../../components/SideTag";

import dayOne from "../../../../assets/images/clients/day1.jpg";
import rps from "../../../../assets/images/clients/rps.jpg";
import raise from "../../../../assets/images/clients/raise.png";
import cityconnect from "../../../../assets/images/clients/cityconnect.png";

import { Container } from "./styles";

function Clients() {
  const { t } = useTranslation();

  return (
    <Container>
      <SideTag side="right">
        <strong>{t("Clients")}</strong>
      </SideTag>
      <ul>
        <li>
          <div>
            <img src={dayOne} alt="Day 1" />
            <p>
              <b>Day 1 Photographs</b> {t("DayOneText")}
            </p>

            <a
              href="https://www.day1photographs.com/bio"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("More About")} Day 1 Photographs <MdArrowForward size={24} />
            </a>
          </div>
          <div>
            <img src={cityconnect} alt="City Connect" />
            <p>
              <b>City Connect</b> {t("CityConnectText")}
            </p>

            <a
              href="https://new.cityconnect.com.br"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("More About")} City Connect <MdArrowForward size={24} />
            </a>
          </div>
          <div>
            <img src={raise} alt="Raise Investments" />
            <p>
              <b>Raise Investments</b> {t("RaiseInvestmentsText")}
            </p>

            <a
              href="https://raise.investments/about-us/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("More About")} Raise Investments <MdArrowForward size={24} />
            </a>
          </div>
          <div>
            <img src={rps} alt="RPS" />
            <p>
              <b>Restoration Precare Solutions</b>{" "}
              {t("RestorationPrecareSolutionsText")}
            </p>

            <a href="">
              {t("More About")} RPS <MdArrowForward size={24} />
            </a>
          </div>
        </li>
      </ul>
    </Container>
  );
}

export default Clients;

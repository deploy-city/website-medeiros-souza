import React from "react";
import { MdArrowForward } from "react-icons/md";

import SideTag from "../../../../components/SideTag";

import dayOne from "../../../../assets/images/clients/day1.jpg";
import rps from "../../../../assets/images/clients/rps.jpg";
import raise from "../../../../assets/images/clients/raise.png";
import cityconnect from "../../../../assets/images/clients/cityconnect.png";

import { Container } from "./styles";

function Clients() {
  return (
    <Container>
      <SideTag side="right">
        <strong>PARTNERS</strong>
      </SideTag>
      <ul>
        <li>
          <div>
            <img src={dayOne} alt="Day 1" />
            <p>
              <b>Day 1 Photographs</b> was created from the passion of those who
              love to be behind the lens, taking breathtaking photos for all of
              you to see!
            </p>

            <a
              href="https://www.day1photographs.com/bio"
              target="_blank"
              rel="noopener noreferrer"
            >
              More about Day 1 Photographs <MdArrowForward size={24} />
            </a>
          </div>
          <div>
            <img src={cityconnect} alt="City Connect" />
            <p>
              <b>City Connect</b> was born for innovation, and has grew up with
              it, developing initiatives wich sustain the market in viable
              solutions.
            </p>

            <a
              href="https://new.cityconnect.com.br"
              target="_blank"
              rel="noopener noreferrer"
            >
              More about City Connect <MdArrowForward size={24} />
            </a>
          </div>
          <div>
            <img src={raise} alt="Raise Investments" />
            <p>
              <b>Raise Investments</b> are a company capturing opportunities for
              investments in residential developments in the state of Florida in
              the United States.
            </p>

            <a
              href="https://raise.investments/about-us/"
              target="_blank"
              rel="noopener noreferrer"
            >
              More about Raise Investments <MdArrowForward size={24} />
            </a>
          </div>
          <div>
            <img src={rps} alt="RPS" />
            <p>
              <b>Restoration Precare Solutions</b> dolor sit amet, consectetur
              adipiscing elit. Nulla in consectetur diam. Aenean ut libero nec.
            </p>

            <a href="">
              More about RPS <MdArrowForward size={24} />
            </a>
          </div>
        </li>
      </ul>
    </Container>
  );
}

export default Clients;

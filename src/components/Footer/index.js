import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import instagram from "../../assets/images/instagram.svg";
import linkedin from "../../assets/images/linkedin.svg";
import facebook from "../../assets/images/facebook.svg";

import { MdArrowDropUp } from "react-icons/md";
import { Container, Social, GoUp } from "./styles";

export default function Footer() {
  const [message, setMessage] = useState("");

  const { t } = useTranslation();

  async function register() {
    console.log(message);
  }

  return (
    <>
      <Container>
        <div>
          <h2>{t("Contact Information")}</h2>
          <div>
            <span>ADDRESS: 845 N GARLAND AVE, STE 100</span>
            <span>ORLANDO</span>
            <span>FL 32801</span>
          </div>

          <div>
            <span className="uppercase">{t("Phone")}:</span>
            <span>407-326-8484</span>
          </div>

          <div>
            <span>FAX:</span>
            <span>407-604-6519</span>
          </div>

          <div>
            <span>EMAIL</span>
            <span>contact@medeirossouza.com</span>
          </div>
        </div>

        <div>
          <h2>{t("Follow Us")}</h2>

          <Social>
            <a
              href="http://instagram.com/MedeirosSouzaTax"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <img src={instagram} alt="IG" />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/feed/update/urn:li:activity:6654500294791086080"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <img src={linkedin} alt="IN" />
              </div>
            </a>
            <a
              href="http://fb.com/MedeirosSouzaTax"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <img src={facebook} alt="FB" />
              </div>
            </a>
          </Social>

          <h2>MENU</h2>
          <a href="#home">Home</a>
          <a href="#about">{t("About")}</a>
          <a href="#services">{t("Services")}</a>
          <a href="#contact">{t("Contact")}</a>
        </div>

        <div>
          <h2>{t("Do you want to receive news by email")}</h2>

          <h3>{t("Register")}: </h3>

          <input
            type="text"
            onChange={(e) => setMessage(e.target.value)}
            placeholder={t("Write your e-mail")}
          />
          <button onClick={register}>{t("Send")}</button>
        </div>
      </Container>
      <GoUp onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <MdArrowDropUp color="#fff" size={30} />
      </GoUp>
    </>
  );
}

import React, { useState, useCallback } from "react";
import { MdReorder, MdClose, MdPublic } from "react-icons/md";
import { useTranslation } from "react-i18next";
import language from "../../services/language";

import logo from "../../assets/images/logo.png";

import usa from "../../assets/images/flags/usa.png";
import brazil from "../../assets/images/flags/brazil.png";
import spain from "../../assets/images/flags/spain.png";

import { Button, Container, LanguageBox } from "./styles";

function NavBar() {
  const [openOnMobile, setOpenOnMobile] = useState(false);
  const [openLanguage, setOpenLanguage] = useState(false);

  const { t } = useTranslation();

  const handleScroll = useCallback((id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    });
  }, []);

  const changeLanguage = useCallback((lng) => {
    language.changeLanguage(lng);
  }, []);

  return (
    <>
      <Button onClick={() => setOpenOnMobile(!openOnMobile)}>
        {!openOnMobile && <MdReorder size={50} color="rgba(0, 0, 0, 0.5)" />}
        {openOnMobile && <MdClose size={50} color="#fff" />}
      </Button>

      <Container openOnMobile={openOnMobile}>
        <img src={logo} alt="Medeiros Souza" />

        <ul>
          <li>
            <button onClick={() => handleScroll("home")}>Home</button>
          </li>
          <li>
            <button onClick={() => handleScroll("about")}>{t("About")}</button>
          </li>
          <li>
            <button onClick={() => handleScroll("services")}>
              {t("Services")}
            </button>
          </li>
          <li>
            <button onClick={() => handleScroll("contact")}>
              {t("Contact")}
            </button>
          </li>
          <li>
            <button onClick={() => setOpenLanguage(!openLanguage)}>
              <MdPublic size={30} color="#fff" />
            </button>
            <LanguageBox open={openLanguage}>
              <button onClick={() => changeLanguage("en-US")}>
                <img src={usa} alt="USA" />
                <span>English</span>
              </button>

              <button onClick={() => changeLanguage("pt-BR")}>
                <img src={brazil} alt="Português" />
                <span>Português</span>
              </button>

              <button onClick={() => changeLanguage("es")}>
                <img src={spain} alt="Español" />
                <span>Español</span>
              </button>
            </LanguageBox>
          </li>
        </ul>
      </Container>
    </>
  );
}

export default NavBar;

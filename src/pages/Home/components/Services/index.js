import React, { useState, useCallback } from "react";
import { useTranslation } from "react-i18next";

import SideTag from "../../../../components/SideTag";

import consultoria from "../../../../assets/images/consultoria.jpg";
import contabilidade from "../../../../assets/images/contabilidade.jpg";
import imigracao from "../../../../assets/images/imigracao.jpg";
import investimentos from "../../../../assets/images/investments.jpg";

import { Container, ModalContent } from "./styles";
import ServiceModal from "react-modal";

import { overlayStyle, contentStyle } from "./modalStyles";

function Services() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalHeader, setModalHeader] = useState(null);
  const [modalText, setModalText] = useState(null);

  const { t } = useTranslation();

  const handleModal = useCallback(
    (service) => {
      switch (service) {
        case "tax":
          setModalHeader(t("International Tax"));

          setModalText(t("InternationalTaxesText"));
          break;

        case "business":
          setModalHeader(t("Business Consulting"));

          setModalText(t("BusinessConsultingText"));
          break;

        case "incorporating":
          setModalHeader(t("Business Incorporation"));

          setModalText(t("BusinessIncorporationText"));
          break;

        case "investment":
          setModalHeader(t("Investment and Management"));

          setModalText(t("InvestmentAndManagementText"));
          break;

        default:
      }

      setIsOpen(true);
    },
    [t]
  );

  const handleCloseModal = useCallback(() => {
    setIsOpen(false);
    setModalHeader(null);
    setModalText(null);
  }, []);

  return (
    <Container id="services">
      <SideTag side="right">
        <strong>{t("Services")}</strong>
      </SideTag>

      <ul>
        <li>
          <button onClick={() => handleModal("business")}>
            <div>
              <img src={consultoria} alt="Consultoria" />
              <span>{t("Business Consulting")}</span>
            </div>
          </button>
        </li>
        <li>
          <button onClick={() => handleModal("tax")}>
            <div>
              <img src={contabilidade} alt="Contabilidade" />
              <span>{t("International Taxes")}</span>
            </div>
          </button>
        </li>
        <li>
          <button onClick={() => handleModal("incorporating")}>
            <div>
              <img src={imigracao} alt="incorporating" />
              <span>{t("Business Incorporation")}</span>
            </div>
          </button>
        </li>
        <li>
          <button onClick={() => handleModal("investment")}>
            <div>
              <img src={investimentos} alt="Investments" />
              <span>{t("Investment and Management")}</span>
            </div>
          </button>
        </li>
      </ul>

      <ServiceModal
        onRequestClose={handleCloseModal}
        isOpen={isOpen}
        style={{
          overlay: overlayStyle,
          content: contentStyle,
        }}
      >
        <ModalContent>
          <h1>{modalHeader}</h1>
          <p>{modalText}</p>
        </ModalContent>
      </ServiceModal>
    </Container>
  );
}

export default Services;

import React, { useState, useCallback } from "react";

import SideTag from '../../../../components/SideTag'

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

  const handleModal = useCallback((service) => {
    switch (service) {
      case "tax":
        setModalHeader("International Tax");

        setModalText(`
            Our international client base is spread over 25 countries, with a mix 
            of individual and corporate ownership in US-based investment. Medeiros 
            Souza is well equipped to handle even the most complex filings to 
            federal and state authorities. Our team of experienced, committed 
            professionals and our substantial investment in technology provide for
            excellent service and communication, deep expertise, and an environment
            our clients and associates want to be a part of.
        `);
        break;

      case "business":
        setModalHeader("Business Consulting");

        setModalText(`
          Let our team help you structure your business here in the USA. Through 
          services as market research, robust business plan and advice on obtaining
          licenses, we will help you to enter the American market.
        `);
        break;

      case "incorporating":
        setModalHeader("Incorporating Companies");

        setModalText(`
          We do business incorporation processes and help you identify the best 
          category of the company for you. One of the first tasks you’ll face is
          entity selection. There are a number of ways in which to incorporate, 
          and each has distinct advantages and disadvantages. will work with you 
          to choose the entity that’s right for your practice as well as the best 
          state in which to incorporate to take advantage of tax laws and other 
          incentives.
        `);
        break;

      case "investment":
        setModalHeader("Investment & Management");

        setModalText(`
          Our team of specialists will guide you to find the best 
          investment opportunities based on your profile and help you in all 
          stages of management.
        `);
        break;

      default:
    }

    setIsOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsOpen(false);
    setModalHeader(null);
    setModalText(null);
  }, []);

  return (
    <Container id="services">
      <SideTag side="right">
        <strong>SERVICES</strong>
      </SideTag>

      <ul>
        <li>
          <button onClick={() => handleModal("business")}>
            <div>
              <img src={consultoria} alt="Consultoria" />
              <span>
                Business <br /> Consulting
              </span>
            </div>
          </button>
        </li>
        <li>
          <button onClick={() => handleModal("tax")}>
            <div>
              <img src={contabilidade} alt="Contabilidade" />
              <span>International Tax</span>
            </div>
          </button>
        </li>
        <li>
          <button onClick={() => handleModal("incorporating")}>
            <div>
              <img src={imigracao} alt="incorporating" />
              <span>
                Incorporating <br /> Companies
              </span>
            </div>
          </button>
        </li>
        <li>
          <button onClick={() => handleModal("investment")}>
            <div>
              <img src={investimentos} alt="Investments" />
              <span>
                Investment <br /> {"&"} <br /> Management
              </span>
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
import React, { useState } from "react";

import logo from "../../assets/images/logo.png";

import { MdReorder, MdClose, MdPublic } from "react-icons/md";

import { Button, Container } from "./styles";

export default function NavBar() {
  const [openOnMobile, setOpenOnMobile] = useState(false);

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
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <MdPublic size={30} color="#fff" />
          </li>
        </ul>
      </Container>
    </>
  );
}

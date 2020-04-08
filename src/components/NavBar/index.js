import React from "react";

import logo from "../../assets/images/logo.png";

import { Container } from "./styles";

export default function NavBar() {
  return (
    <Container>
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
        <li>Icon v</li>
      </ul>
    </Container>
  );
}

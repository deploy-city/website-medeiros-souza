import React from "react";

import About from "./components/About";
import Services from "./components/Services";
import News from "./components/News";
import Clients from "./components/Clients";
import Contact from "./components/Contact";

import Carousel from "../../components/Carousel";

import { Container } from "./styles";

export default function Home() {
  return (
    <Container id="home">
      <Carousel />
      <About id="about" />
      <Services id="services" />
      <News id="news" />
      <Clients id="clients" />
      <Contact id="contact" />
    </Container>
  );
}

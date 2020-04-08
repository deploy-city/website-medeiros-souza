import React from "react";
import "./App.css";

import about from "./assets/images/about.jpg";
import services from "./assets/images/services.png";
import consultoria from "./assets/images/consultoria.jpg";
import contabilidade from "./assets/images/contabilidade.jpg";
import imigracao from "./assets/images/imigracao.jpg";

import { Container, About, Services, Contact } from "./styles";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";

function App() {
  return (
    <Container>
      <NavBar />

      <Carousel />

      <About id="about">
        <img src={about} alt="About" />

        <div>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <ul>
            <li>- Lorem ipsum </li>
            <li>- Dolor sit amet</li>
            <li>- Consectetur adipiscing </li>
            <li>- Sed do eiusmod</li>
          </ul>
        </div>
      </About>

      <Services id="services">
        <img src={services} alt="Services" />

        <ul>
          <li>
            <img src={consultoria} alt="Consultoria" />
          </li>
          <li>
            <img src={contabilidade} alt="Contabilidade" />
          </li>
          <li>
            <img src={imigracao} alt="Imigração" />
          </li>
        </ul>
      </Services>

      <Contact>
        <img src={services} alt="Contact" />
        <div>
          <form action="">
            <label htmlFor="name">YOUR NAME (REQUIRED): </label>
            <input id="name" name="name" type="text" />

            <label htmlFor="">YOUR E-MAIL (REQUIRED): </label>
            <input id="email" name="email" type="email" />

            <label htmlFor="">SUBJECT:</label>
            <input id="subject" name="subject" type="text" />

            <label htmlFor="">YOUR MESSAGE HERE</label>
            <textarea id="message" name="message" type="text" />
          </form>
        </div>
      </Contact>
      <Footer />
    </Container>
  );
}

export default App;

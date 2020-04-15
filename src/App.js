import React, { useState } from "react";
import "./App.css";
import api from "./services/api";
import "react-toastify/dist/ReactToastify.min.css";

import { ToastContainer, toast } from "react-toastify";

import about from "./assets/images/about.jpg";
import services from "./assets/images/services.png";
import consultoria from "./assets/images/consultoria.jpg";
import contabilidade from "./assets/images/contabilidade.jpg";
import imigracao from "./assets/images/imigracao.jpg";
import contact from "./assets/images/contact.png";

import { Container, About, Services, Contact } from "./styles";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import { useForm } from "react-hook-form";

function App() {
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, watch, errors } = useForm();

  const handleContactForm = async (data) => {
    setLoading(true);
    const { name, email, subject, message: text } = data;

    const emailRegex = new RegExp(
      /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/
    );

    if (!emailRegex.test(email)) {
      return toast.error("Invalid e-mail address");
    }

    const body = {
      to: ["guilherme.pcabo@gmail.com"],
      from: `${name} <${email}>`,
      subject,
      text,
    };

    await api.post("/send", body);
    setLoading(false);
    return toast.success("Your contact request was sent succesfully");
  };

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
            <div>
              <img src={consultoria} alt="Consultoria" />
              <span>
                Tax <br /> Consulting
              </span>
            </div>
          </li>
          <li>
            <div>
              <img src={contabilidade} alt="Contabilidade" />
              <span>
                Business <br /> Accounting
              </span>
            </div>
          </li>
          <li>
            <div>
              <img src={imigracao} alt="Imigração" />
              <span>Immigration</span>
            </div>
          </li>
        </ul>
      </Services>
      <Contact id="contact">
        <img src={contact} alt="Contact" />
        <div>
          <form onSubmit={handleSubmit(handleContactForm)}>
            <label htmlFor="name">YOUR NAME (REQUIRED): </label>
            <input
              ref={register({ required: true })}
              id="name"
              name="name"
              type="text"
              required
            />
            {errors.name && <span>E-mail field is required</span>}

            <label htmlFor="">YOUR E-MAIL (REQUIRED): </label>
            <input
              ref={register({ required: true })}
              id="email"
              name="email"
              type="email"
              required
            />
            {errors.email && <span>E-mail field is required</span>}

            <label htmlFor="">SUBJECT:</label>
            <input ref={register} id="subject" name="subject" type="text" />

            <label htmlFor="">YOUR MESSAGE HERE</label>
            <textarea ref={register} id="message" name="message" type="text" />
            <button type="submit" disabled={loading}>
              {loading ? "SENDING..." : "SUBMIT"}
            </button>
          </form>
        </div>
      </Contact>
      <Footer />

      <ToastContainer />
    </Container>
  );
}

export default App;

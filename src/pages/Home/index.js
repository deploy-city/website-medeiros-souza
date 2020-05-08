import React, { useState, useRef, useCallback, useEffect } from "react";
import api, { storageUrl } from "../../services/api";
import "react-toastify/dist/ReactToastify.min.css";
import { toast } from "react-toastify";
import { Carousel as CarouselPlugin } from "react-responsive-carousel";
import { useForm } from "react-hook-form";

import about from "../../assets/images/about.jpg";
import services from "../../assets/images/services.png";
import consultoria from "../../assets/images/consultoria.jpg";
import contabilidade from "../../assets/images/contabilidade.jpg";
import imigracao from "../../assets/images/imigracao.jpg";
import contact from "../../assets/images/contact.png";
import newsTag from "../../assets/images/news.png";

import Carousel from "../../components/Carousel";

import {
  Container,
  About,
  Services,
  Contact,
  News,
  CarouselDiv,
  MapsContainer,
} from "./styles";
import Maps from "./Maps";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [news, setNews] = useState([]);

  useEffect(() => {
    api.get("/news").then((response) => {
      setNews(response.data);
    });
  }, []);

  const formRef = useRef(null);

  const { register, handleSubmit, errors } = useForm();

  const handleContactForm = useCallback(async (data) => {
    setLoading(true);
    const { name, email, subject, message: text } = data;

    const emailRegex = new RegExp(
      /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/
    );

    if (!emailRegex.test(email)) {
      return toast.error("Invalid e-mail address");
    }

    const body = {
      name,
      from: email,
      subject,
      text,
    };

    try {
      await api.post("/email", body);

      setLoading(false);

      formRef.current.reset();

      return toast.success("Your contact request was sent succesfully");
    } catch (err) {
      toast.error(`Something went wrong`);
      setLoading(false);
    }
  }, []);

  return (
    <Container>
      <Carousel />

      <About id="about">
        <img src={about} alt="About" />

        <div>
          <p>
            <strong>MEDEIROS SOUZA Corp</strong> is a tax and accounting firm
            based in the heart of Orlando, FL, providing services nationwide. We
            do not outsource any of our tax and accounting services.
          </p>
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

      {news && (
        <News id="news">
          <img src={newsTag} alt="News" />
          <CarouselPlugin showThumbs={false} showStatus={false}>
            {news.map(({ id, title, image, text }) => (
              <CarouselDiv key={id}>
                <div></div>
                <img src={`${storageUrl}/${image}`} alt="First" />
                <h1>{title}</h1>
                <pre dangerouslySetInnerHTML={{ __html: text }}></pre>
              </CarouselDiv>
            ))}
          </CarouselPlugin>
        </News>
      )}

      <Contact id="contact">
        <img src={contact} alt="Contact" />
        <div>
          <form ref={formRef} onSubmit={handleSubmit(handleContactForm)}>
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

          <MapsContainer>
            <Maps
              lat={28.5564063}
              lon={-81.380787}
              place="City Connect - Soluções em Tecnologia"
            />
          </MapsContainer>
        </div>
      </Contact>
    </Container>
  );
}

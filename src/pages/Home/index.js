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

          <ul>
            <li>
              <strong>BUSINESS CONSULTING: </strong> Let our team help you
              structure your business here in the USA. Through services as
              market research, robust business plan and advice on obtaining
              licenses, we will help you to enter the American market.
            </li>
            <li>
              <strong>INVESTMENT &amp; MANAGEMENT: </strong>
              Our team of specialists will guide you to find the best investment
              opportunities based on your profile and help you in all stages of
              management.
            </li>
            <li>
              <strong>INCORPORATING COMPANIES: </strong>
              We do business incorporation processes and help you identify the
              best category of the company for you. One of the first tasks
              you’ll face is entity selection. There are a number of ways in
              which to incorporate, and each has distinct advantages and
              disadvantages. will work with you to choose the entity that’s
              right for your practice as well as the best state in which to
              incorporate to take advantage of tax laws and other incentives.
            </li>
            <li>
              <strong>INTERNATIONAL TAX: </strong>
              Our international client base is spread over 25 countries, with a
              mix of individual and corporate ownership in US-based investment.
              Medeiros Souza is well equipped to handle even the most complex
              filings to federal and state authorities. Our team of experienced,
              committed professionals and our substantial investment in
              technology provide for excellent service and communication, deep
              expertise, and an environment our clients and associates want to
              be a part of.
            </li>
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

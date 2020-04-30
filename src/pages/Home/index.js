import React, { useState, useRef, useCallback, useEffect } from "react";
import api, { baseURL } from "../../services/api";
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
} from "./styles";

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
      <News id="news">
        <img src={newsTag} alt="News" />
        <CarouselPlugin showThumbs={false} showStatus={false}>
          {news.map(({ id, title, image }) => (
            <CarouselDiv key={id}>
              <div></div>
              <img src={`${baseURL}/storage/news/${image}`} alt="First" />
              <h1>{title}</h1>
            </CarouselDiv>
          ))}
        </CarouselPlugin>
      </News>
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
        </div>
      </Contact>
    </Container>
  );
}

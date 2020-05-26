import React, { useState, useRef, useCallback } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import api from "../../../../services/api";
import contact from "../../../../assets/images/contact.png";

import Maps from "./Maps";
import { Container, MapsContainer } from "./styles";

function Contact() {
  const [loading, setLoading] = useState(false);

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
    <Container id="contact">
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
    </Container>
  );
}

export default Contact;

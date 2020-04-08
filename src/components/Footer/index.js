import React, { useState } from "react";

import instagram from "../../assets/images/instagram.svg";
import linkedin from "../../assets/images/linkedin.svg";

import { MdArrowDropUp } from "react-icons/md";
import { Container, Social, GoUp } from "./styles";

export default function Footer() {
  const [message, setMessage] = useState("");

  async function register() {
    console.log(message);
  }

  return (
    <>
      <Container>
        <div>
          <h2>CONTACT INFORMATION</h2>
          <div>
            <span>ADDRESS: XXXXXXXXXXXXXXXXXXXXX</span>
            <span>XXXX</span>
            <span>XXX XXXXX X</span>
          </div>

          <div>
            <span>PHONE:</span>
            <span>XXXXXXXXXXXXX</span>
            <span>XXXXXXXXXXXXX</span>
          </div>

          <div>
            <span>EMAIL</span>
            <span>XXXXXXXX@XXXX.com</span>
          </div>
        </div>

        <div>
          <h2>FOLLOW US</h2>

          <Social>
            <a href="" target="_blank">
              <div>
                <img src={instagram} alt="IG" />
              </div>
            </a>
            <a href="" target="_blank">
              <div>
                <img src={linkedin} alt="IN" />
              </div>
            </a>
          </Social>

          <h2>MENU</h2>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>

        <div>
          <h2>DO YOU WANT TO RECEIVE NEWS BY EMAIL?</h2>

          <h3>REGISTER: </h3>

          <input
            type="text"
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your e-mail"
          />
          <button onClick={register}>SEND</button>
        </div>
      </Container>
      <GoUp onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <MdArrowDropUp color="#fff" size={30} />
      </GoUp>
    </>
  );
}

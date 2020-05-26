import React, { useState, useCallback } from "react";

import logo from "../../assets/images/logo.png";

import { MdReorder, MdClose, MdPublic } from "react-icons/md";

import { Button, Container } from "./styles";

export default function NavBar() {
  const [openOnMobile, setOpenOnMobile] = useState(false);

  const handleScroll = useCallback((id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    });
  }, []);

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
            <button onClick={() => handleScroll("home")}>Home</button>
          </li>
          <li>
            <button onClick={() => handleScroll("about")}>About</button>
          </li>
          <li>
            <button onClick={() => handleScroll("services")}>Services</button>
          </li>
          <li>
            <button onClick={() => handleScroll("contact")}>Contact</button>
          </li>
          <li>
            <MdPublic size={30} color="#fff" />
          </li>
        </ul>
      </Container>
    </>
  );
}

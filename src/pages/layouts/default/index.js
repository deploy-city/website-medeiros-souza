import React from "react";

import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";

import PropTypes from "prop-types";

import { Wrapper } from "./styles";

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <NavBar />

      {children}

      <Footer />
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

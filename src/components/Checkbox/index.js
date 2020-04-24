import React from "react";
import PropTypes from "prop-types";

import { Container } from "./styles";

export default function Checkbox({ children }) {
  return (
    <Container>
      {children}
      <span></span>
    </Container>
  );
}

Checkbox.propTypes = {
  children: PropTypes.element.isRequired,
};

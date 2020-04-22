import React from "react";

import PropTypes from "prop-types";

import { Wrapper } from "./styles";

export default function AdminLayout({ children }) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}

AdminLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

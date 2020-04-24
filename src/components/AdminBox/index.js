import React from "react";
import PropTypes from "prop-types";
import { MdAdd } from "react-icons/md";
import { useLocation, Link } from "react-router-dom";

import { Container, Header } from "./styles";

export default function AdminBox({ title, hasAddButton, children }) {
  const { pathname } = useLocation();

  return (
    <Container>
      <Header>
        <h1>{title}</h1>

        {hasAddButton && (
          <Link to={`${pathname}/add`}>
              <MdAdd size={26} />
          </Link>
        )}
      </Header>
      {children}
    </Container>
  );
}

AdminBox.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  hasAddButton: PropTypes.bool,
};

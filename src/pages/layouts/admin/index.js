import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import logo from "../../../assets/images/logo.png";

import { Wrapper, SideBar } from "./styles";

export default function AdminLayout({ children }) {
  return (
    <Wrapper>
      <SideBar>
        <img src={logo} alt="Medeiros Souza" />

        <h2>Control Panel</h2>
        <ul>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/newsletter">Newsletter</Link>
          </li>
        </ul>
      </SideBar>
      {children}
    </Wrapper>
  );
}

AdminLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

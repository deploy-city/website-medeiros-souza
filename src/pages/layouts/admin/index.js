import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { MdExitToApp } from "react-icons/md";

import logo from "../../../assets/images/logo.png";
import { useAuth } from "../../../hooks/auth";

import { Wrapper, SideBar } from "./styles";

export default function AdminLayout({ children }) {
  const { signOut } = useAuth();

  return (
    <Wrapper>
      <SideBar>
        <img src={logo} alt="Medeiros Souza" />

        <h2>Control Panel</h2>
        <ul>
          <li>
            <Link to="/admin/news">News</Link>
          </li>
          {/* <li>
            <Link to="/admin/newsletter">Newsletter</Link>
          </li> */}
          <li>
            <button onClick={signOut}>
              <MdExitToApp />
              Sign out
            </button>
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

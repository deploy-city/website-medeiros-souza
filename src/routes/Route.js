import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

import { store } from "../store";
export default function RouteWrapper({
  layout: Layout,
  component: Component,
  isPrivate = false,
  auth = false,
  ...rest
}) {
  const { signed } = store.getState().auth;

  if (!signed && isPrivate) {
    return <Redirect to="/login" />;
  }

  if (signed && auth) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  auth: PropTypes.bool,
  layout: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
  auth: false,
};

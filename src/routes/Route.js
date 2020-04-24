import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

import { useAuth } from "../hooks/auth";
export default function RouteWrapper({
  layout: Layout,
  component: Component,
  isPrivate = false,
  auth = false,
  ...rest
}) {
  const Auth = useAuth();
  const { signed } = Auth;

  if (!signed && isPrivate) {
    return <Redirect to="/login" />;
  }

  if (signed && auth) {
    return <Redirect to="/admin" />;
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

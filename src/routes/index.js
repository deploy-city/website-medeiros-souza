import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

import SignIn from "../pages/SignIn";
import Home from "../pages/Home";

import DefaultLayout from "../pages/layouts/default";
import AuthLayout from "../pages/layouts/auth";

export default function Routes() {
  return (
    <Switch>
      <Route path="/login" exact auth component={SignIn} layout={AuthLayout} />
      
      <Route path="/" exact component={Home} layout={DefaultLayout} />

      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}

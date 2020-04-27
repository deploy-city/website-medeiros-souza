import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

import SignIn from "../pages/SignIn";
import Home from "../pages/Home";
import Dashboard from "../pages/Admin/Dashboard";

import News from "../pages/Admin/News/Index";
import AddNew from "../pages/Admin/News/Add";
import EditNew from "../pages/Admin/News/Edit";

import DefaultLayout from "../pages/layouts/default";
import AuthLayout from "../pages/layouts/auth";
import AdminLayout from "../pages/layouts/admin";

export default function Routes() {
  return (
    <Switch>
      <Route path="/login" exact auth component={SignIn} layout={AuthLayout} />
      <Route path="/" exact component={Home} layout={DefaultLayout} />
      <Route
        path="/admin"
        isPrivate
        exact
        component={Dashboard}
        layout={AdminLayout}
      />

      <Route
        path="/admin/news"
        isPrivate
        exact
        component={News}
        layout={AdminLayout}
      />
      <Route
        path="/admin/news/add"
        isPrivate
        exact
        component={AddNew}
        layout={AdminLayout}
      />
      <Route
        path="/admin/news/edit/:id"
        isPrivate
        exact
        component={EditNew}
        layout={AdminLayout}
      />
      <Route path="/" component={() => <h1>404</h1>} layout={DefaultLayout} />
    </Switch>
  );
}

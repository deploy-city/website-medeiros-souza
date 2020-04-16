import React from "react";
import { Router } from "react-router-dom";
import history from "./services/history";
import Routes from "./routes";

import GlobalStyle from "./styles/global";

import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Router history={history}>
      <Routes />
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
    </Router>
  );
}
export default App;

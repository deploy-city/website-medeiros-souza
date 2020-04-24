import React from "react";
import { Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import AppProvider from "./hooks";
import history from "./services/history";
import Routes from "./routes";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <AppProvider>
      <Router history={history}>
        <Routes />
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
      </Router>
    </AppProvider>
  );
}
export default App;

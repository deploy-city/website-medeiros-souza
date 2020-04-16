import { createGlobalStyle } from "styled-components";

import "react-toastify/dist/ReactToastify.css";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-box-sizing: border-box; /* Safari/Chrome */
    -moz-box-sizing: border-box; /* Mozilla */
    outline: 0;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    overflow-x: hidden;
  }

  body {
    -webkit-font-smoothing: antialiased;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    overflow-x: hidden;
  }

  button {
    cursor: pointer;
  }
`;

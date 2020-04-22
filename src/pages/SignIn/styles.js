import styled from "styled-components";
import { lighten } from "polished";

import background from "../../assets/images/login_background.jpg";

export const Container = styled.div`
  background: #000;
  height: 100vh;
  padding-top: 100px;
  background: url(${background});
  background-repeat: no-repeat;
  background-size: cover;

  div {
    background: #fff;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    width: 500px;
    margin: auto;
    padding: 40px 50px 40px;

    h2 {
      text-align: center;
      margin: 30px 0 50px;
    }

    form {
      div {
        position: relative;
        background: rgba(0, 0, 0, 0.1);
        margin-bottom: 15px;
        padding: 15px;
        border: none;
        width: 100%;
        border-radius: 4px;

        input {
          background: transparent;
          border: 0;
          position: absolute;
          left: 60px;
          top: 20px;
          font-size: 18px;
        }
      }

      button {
        border: 0;
        color: #fff;
        padding: 15px 10px;
        font-size: 14px;
        background: #ff1900;
        border-radius: 4px;
        transition: 0.1s;
        width: 100%;

        &:hover {
          background: ${lighten(0.15, "#ff1900")};
        }
      }
    }
  }
`;

import styled from "styled-components";
import { darken } from "polished";

import contact from "../../../../assets/images/contact-bg.png";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background: url(${contact});
  height: 800px;
  padding-bottom: 50px;

  img {
    width: 300px;
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 0 20px;

    form {
      display: flex;
      flex-direction: column;
      width: 700px;

      label {
        margin-bottom: 10px;
        color: #fff;
        font-weight: bold;
        font-size: 22px;
      }

      input {
        border-radius: 6px;
        border: none;
        margin-bottom: 20px;
        font-size: 16px;
        padding: 10px;
        color: rgba(0, 0, 0, 0.8);
      }

      textarea {
        border-radius: 6px;
        border: none;
        margin-bottom: 20px;
        font-size: 16px;
        padding: 10px;
        color: rgba(0, 0, 0, 0.8);
        height: 200px;
      }

      span {
        color: #fff;
      }

      button {
        background: #ff000c;
        padding: 10px;
        color: #fff;
        border: 0;
        width: auto;
        border-radius: 12px;
        font-weight: bold;
        font-size: 16px;
        cursor: pointer;
        transition: 0.2s;

        &:hover {
          background: ${darken(0.1, "#ff000c")};
        }
      }
    }
  }
`;

export const MapsContainer = styled.div`
  margin: 20px 0 0 100px;
  height: 550px !important;
  width: 650px !important;
  border-radius: 4px;
  overflow-x: hidden;
  position: relative;
`;

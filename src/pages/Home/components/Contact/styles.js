import styled from "styled-components";
import { darken } from "polished";

import contact from "../../../../assets/images/contact-bg.png";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background: url(${contact});
  background-size: cover;
  padding: 20px 0 50px;

  img {
    width: 300px;
  }

  div.content {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 0 20px;

    @media (max-width: 650px) {
      flex-direction: column;
    }

    form {
      display: flex;
      flex-direction: column;
      flex: 1;

      label {
        margin-bottom: 10px;
        color: #fff;
        font-weight: bold;
        font-size: 22px;
        text-transform: uppercase;
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
        text-transform: uppercase;
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
  height: 550px;
  width: 650px;
  border-radius: 4px;
  overflow-x: hidden;
  position: relative;

  @media (max-width: 640px) {
    margin: 30px 0 0;

    width: calc(100% - 10px);
    height: 300px;
  }
`;

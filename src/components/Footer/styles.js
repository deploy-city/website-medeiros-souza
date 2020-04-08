import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  background: #222324;
  display: flex;
  justify-content: space-between;
  /* position: absolute; */
  bottom: 40px;
  width: 100%;
  max-width: 100vw;
  height: 350px;
  color: #fff;
  padding: 20px 40px 10px;

  div {
    display: flex;
    flex-direction: column;

    h2 {
      margin-bottom: 10px;
    }

    div {
      color: rgba(255, 255, 255, 0.7);
      margin-bottom: 30px;
    }

    h3 {
      margin-top: 20px;
    }

    input {
      height: 30px;
      border-radius: 8px;
      margin: 20px 0 10px;
      text-align: center;
      box-shadow: none;
    }

    button {
      background: #ff000c;
      color: #fff;
      border: 0;
      height: 30px;
      width: 70px;
      border-radius: 12px;
      font-weight: bold;
      font-size: 16px;
      cursor: pointer;
      transition: 0.1s;

      &:hover {
        background: ${darken(0.1, "#ff000c")};
      }
    }

    a {
      text-decoration: none;
      color: #fff;
      margin: 4px 0;

      h3 ~ & {
        margin-top: 8px;
      }
    }
  }
`;

export const Social = styled.div`
  flex-direction: row !important;
  margin: 10px 0 0 !important;

  a {
    & + a {
      margin-left: 20px;
    }
    
    div {
      background: #ff000c;
      height: 40px;
      width: 40px;
      border-radius: 50%;
      display: flex;
      justify-content: center;

      img {
        height: 20px;
      }
    }
  }
`;

export const GoUp = styled.button`
  width: 100%;
  position: absolute;
  bottom: 0;
  height: 40px;
  background: rgba(0, 0, 0);
  border: none;
  outline: none;
  cursor: pointer;
`;

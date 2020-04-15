import styled from "styled-components";
import { darken } from "polished";

import contact from "./assets/images/contact-bg.png";

export const Container = styled.div`
  position: relative;
`;

export const About = styled.div`
  padding: 50px 0 80px;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  img {
    height: 400px;
    margin-right: 30px;

    @media (max-width: 768px) {
      height: auto;
      width: 100%;
    }
  }

  div {
    padding: 20px 100px 20px 20px;
    color: #404040;

    @media (max-width: 768px) {
      padding: 40px 30px 0 20px;
    }

    p {
      margin-bottom: 20px;
    }

    ul {
      list-style: none;
      padding: 0;
    }
  }
`;

export const Services = styled.div`
  background: linear-gradient(to bottom, rgb(0, 0, 0), transparent);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 20px 0;

  img {
    width: 300px;
    margin-bottom: 50px;
  }

  ul {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    list-style: none;

    @media (max-width: 768px) {
      flex-direction: column;
    }

    li {
      position: relative;

      div {
        height: 400px;
        position: relative;

        img {
          height: 100%;
          border-radius: 2px;
          -webkit-box-shadow: 0px 0px 11px 0px rgba(0, 0, 0, 0.75);
          -moz-box-shadow: 0px 0px 11px 0px rgba(0, 0, 0, 0.75);
          box-shadow: 0px 0px 11px 0px rgba(0, 0, 0, 0.75);
          transition: 0.2s;
        }

        span {
          position: absolute;
          bottom: 20px;
          left: 30px;
          color: #fff;
          font-size: 22px;
          font-weight: bold;
        }
      }
    }
  }
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background: url(${contact});
  height: 800px;

  img {
    width: 300px;
  }

  div {
    width: 100%;
    display: flex;
    justify-content: center;

    form {
      display: flex;
      flex-direction: column;
      width: 60%;

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

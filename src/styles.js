import styled from "styled-components";

import contact from "./assets/images/contact.png";

export const Container = styled.div`
  position: relative;
`;

export const About = styled.div`
  padding: 50px 0 80px;
  display: flex;

  img {
    height: 400px;
    margin-right: 30px;
  }

  div {
    padding: 20px 100px 20px 20px;
    color: #404040;

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

    li {
      position: relative;

      img {
        height: 400px;
        border-radius: 2px;
        -webkit-box-shadow: 0px 0px 11px 0px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 0px 0px 11px 0px rgba(0, 0, 0, 0.75);
        box-shadow: 0px 0px 11px 0px rgba(0, 0, 0, 0.75);
        transition: 0.2s;
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
    margin-bottom: 50px;
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
    }
  }
`;

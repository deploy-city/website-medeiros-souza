import styled, { css } from "styled-components";
import { shade } from "polished";

export const Button = styled.button`
  height: 100px;
  position: fixed;
  left: 10px;
  z-index: 5;
  border: none;
  background: none;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100px;
  background: linear-gradient(
    to bottom,
    rgb(0, 0, 0, 0.7),
    rgba(0, 0, 0, 0.4),
    transparent
  );
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 4;
  padding: 30px 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    display: absolute;
    background: linear-gradient(
      to bottom,
      rgb(0, 0, 0),
      rgba(0, 0, 0, 0.5)
    );
    transition: 0.5s;
    right: ${({ openOnMobile }) => (openOnMobile ? 0 : "calc(100% * 2)")}
  }
   
    img {
      height: 100px;
    }

    ul {
      list-style: none;
      padding: 0;
      display: flex;
      flex-direction: row;
      align-items: center;
      position: relative;

      @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
      }

      li {
        display: inline;
        margin-right: 40px;
        text-align: center;

        @media (max-width: 768px) {
          margin: 20px 0 0 0;
        }

        button {
          color: #fff;
          font-weight: bold;
          font-size: 18px;
          text-decoration: none;
          border: 0;
          background: transparent;
        }
      }
    }
  }
`;

export const LanguageBox = styled.div`
  height: 0;
  width: 200px;

  background: #fff;
  border-radius: 8px;

  right: 0;
  top: 60px;

  display: flex;
  flex-direction: column;

  position: absolute;

  transition: 0.1s;

  ${(props) =>
    props.open &&
    css`
      height: 200px;
    `}

  &::before {
    content: "";
    width: 0;
    height: 0;
    border-bottom: 20px solid #fff;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;

    ${(props) =>
      !props.open &&
      css`
        display: none;
      `}

    transition: 0.1s;

    left: 125px;
    top: -20px;
    position: absolute;
  }

  button {
    padding-left: 10px;
    display: none;
    transition: 0.2s;
    background: #c4c4c4;

    ${(props) =>
      props.open &&
      css`
        display: flex;
        flex: 1;
        justify-content: flex-start;
        align-items: center;
      `}

    &:hover {
      background: ${shade(0.1, "#fff")};
    }

    & + button {
      border-top: 1px solid #d4d4d4 !important;
    }

    img {
      height: 40px;
    }

    span {
      color: #000 !important;
      margin-left: 10px;
    }
  }
`;

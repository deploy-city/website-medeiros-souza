import styled from "styled-components";

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

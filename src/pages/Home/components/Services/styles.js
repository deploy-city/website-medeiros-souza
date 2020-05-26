import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(to bottom, rgb(0, 0, 0), transparent);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 20px 0 40px;

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

      @media (max-width: 768px) {
        & + li {
          margin-top: 30px;
        }
      }

      button {
        border: 0;
        transition: 0.3s;

        &:hover {
          transform: scale(1.02);
        }

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
  }
`;

export const ModalContent = styled.div`
  padding: 20px;

  h1 {
    border-bottom: 4px solid #000;
    padding-bottom: 10px;
    text-align: center;
  }

  p {
    margin-top: 50px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 22px;
    text-align: justify;
  }
`;

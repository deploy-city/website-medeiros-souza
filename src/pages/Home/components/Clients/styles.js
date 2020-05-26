import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

  padding-bottom: 50px;

  -webkit-box-shadow: inset 0px 0px 32px -4px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: inset 0px 0px 32px -4px rgba(0, 0, 0, 0.75);
  box-shadow: inset 0px 0px 32px -4px rgba(0, 0, 0, 0.75);

  img {
    height: 182px;
  }

  ul {
    width: 100%;
    list-style-type: none;
    display: flex;
    flex-direction: column;

    li {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;

      @media (max-width: 640px) {
        flex-direction: column;
        align-items: center;
      }

      div {
        background: #fff;
        height: 380px;
        width: 400px;
        max-width: 90vw;
        padding: 30px 10px 0;

        display: flex;
        flex-direction: column;
        align-items: center;

        -webkit-box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.75);
        box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.75);

        @media (max-width: 640px) {
          & + div {
            margin-top: 10px;
          }
        }

        img {
          height: 100px;
          max-width: 80%;
          object-fit: contain;
        }

        p {
          height: 100px;
          margin-top: 40px;
          max-width: 90%;
          padding: 0 30px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
          font-size: 18px;
          color: #707070;

          @media (max-width: 640px) {
            font-size: 16px;
          }
        }

        a {
          display: flex;
          align-items: center;
          text-decoration: none;
          color: #ff0037;
          font-weight: bold;
          margin-top: 40px;
          font-size: 20px;
          transition: 0.2s;

          @media (max-width: 640px) {
            font-size: 18px;
          }

          &:hover {
            color: ${shade(0.3, "#ff0037")};
          }

          svg {
            margin-left: 10px;
          }
        }
      }
    }
  }
`;

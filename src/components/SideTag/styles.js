import styled, { css } from "styled-components";

import tag from "../../assets/images/tag-right.png";

export const Container = styled.div`
  height: 70px;
  width: 300px !important;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  font-size: 42px;
  font-family: "Lato", sans-serif;
  background-size: contain;

  ${(props) =>
    props.side === "right" &&
    css`
      background: url(${tag});
    `}

  ${(props) =>
    props.side === "left" &&
    css`
      background: url(${tag});
      transform: rotate(180deg);

      strong {
        transform: rotate(180deg);
      }
    `}

  strong {
    font-weight: bold;
    color: #fff;
    text-transform: uppercase;
  }
`;

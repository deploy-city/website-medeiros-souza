import styled from "styled-components";

export const Container = styled.div`
  height: 600px;
  position: relative;
  z-index: 3;

  img {
    width: 100%;
    height: 600px;
    object-fit: cover;

    @media (max-width: 768px) {
      height: 550px;
      width: auto;
    }
  }
`;

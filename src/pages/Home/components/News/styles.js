import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  & > div.side-tag {
    left: 0;
    top: 20px;
    position: absolute;
    z-index: 3;
  }
`;

export const CarouselDiv = styled.div`
  position: relative;

  div {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, #000, transparent);
  }

  img {
    height: 600px;
    width: 100%;
    object-fit: cover;
  }

  h1 {
    position: absolute;
    left: 100px;
    bottom: 200px;
    color: #fff;
    font-size: 42px;
    max-width: 80%;
  }

  pre {
    position: absolute;
    left: 100px;
    bottom: 150px;
    color: #dedede;
    font-size: 32px;
    max-width: 80%;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  }
`;

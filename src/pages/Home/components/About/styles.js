import styled from "styled-components";

export const Container = styled.div`
  padding: 50px 0 80px;
  display: flex;
  position: relative;

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

    &.side-tag {
      position: absolute;
      padding: 0;
      top: 70px;
    }

    p {
      margin-bottom: 20px;
      font-size: 24px;
      text-align: justify;
    }
  }
`;

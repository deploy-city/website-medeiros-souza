import styled from "styled-components";
import { lighten } from "polished";

export const Container = styled.div`
  width: 65%;
  min-width: 400px;
  margin: 40px 0 20px 450px;
  padding: 40px;
  overflow: hidden;

  background: #fff;
  border-top: 4px solid #181818;
  border-radius: 6px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;

  h1 {
    color: #181818;
    border-bottom: 4px solid #181818;
    width: 150px;
    padding-bottom: 10px;
  }

  a {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 0;
    background: #181818;
    color: #fff;
    transition: background 0.2s;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background: ${lighten(0.1, "#181818")};
    }
  }
`;

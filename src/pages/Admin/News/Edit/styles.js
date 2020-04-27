import styled from "styled-components";
import { shade, lighten } from "polished";

export const Container = styled.div`
  margin-top: 70px;
  width: 100%;

  form {
    display: flex;
    flex-direction: column;

    label,
    span {
      color: rgba(0, 0, 0, 0.3);
      margin: 10px 0;
      font-weight: bold;
    }

    input {
      margin: 5px 0 30px;
      font-size: 18px;
      padding: 5px 10px;
      border: 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
      font-weight: bold;
    }

    button {
      margin-top: 20px;
      background: #ff000c;
      padding: 10px;
      color: #fff;
      border: 0;
      width: auto;
      border-radius: 4px;
      font-weight: bold;
      font-size: 16px;
      cursor: pointer;
      transition: 0.2s;

      &:hover {
        background: ${shade(0.2, "#ff000c")};
      }
    }

    a {
      margin-top: 10px;
      text-decoration: none;
      text-align: center;
      background: #292929;
      padding: 10px;
      color: #fff;
      border: 0;
      width: auto;
      border-radius: 4px;
      font-weight: bold;
      font-size: 16px;
      cursor: pointer;
      transition: 0.2s;

      &:hover {
        background: ${lighten(0.1, "#292929")};
      }
    }
  }
`;

export const ImportFileContainer = styled.section`
  background: #fff;
  margin: 40px 0 20px;
  border-radius: 5px;
  text-align: center;

  label {
    font-weight: bold;
    font-size: 24px;
  }
`;

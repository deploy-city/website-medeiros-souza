import styled from "styled-components";
import { shade } from "polished";

import background from "../../../assets/images/admin-background.jpg";

export const Wrapper = styled.div`
  height: 100%;
  min-height: 100vh;
  background: url('${background}') no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: row;
`;

export const SideBar = styled.nav`
  height: 100vh;
  width: 350px;
  background: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  margin-right: 100px;

  img {
    width: 300px;
  }

  h2 {
    margin-top: 70px;
    color: #fff;
  }

  ul {
    margin-top: 30px;
    list-style: none;
    display: flex;
    flex-direction: column;
    width: 100%;

    li {
      background: #181818;
      height: 50px;

      display: flex;
      align-items: center;
      padding-left: 30px;

      transition: background 0.2s;

      &:hover {
        background: ${shade(0.3, "#181818")};
      }

      & + li {
        border-top: 2px solid rgba(255, 255, 255, 0.2);
      }

      a {
        width: 100%;
        text-decoration: none;
        color: #fff;
        font-size: 24px;
        font-weight: bold;
      }
    }
  }
`;

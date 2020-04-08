import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100px;
  background: linear-gradient(
    to bottom,
    rgb(0, 0, 0),
    rgba(0, 0, 0, 0.1)
  );
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 4;
  padding: 30px 20px;
   
    img {
      height: 100px;
    }

    ul {
      list-style: none;
      padding: 0;

      li {
        display: inline;
        margin-right: 40px;

        a {
          color: #fff;
          text-decoration: none;
        }
      }
    }
  }
`;

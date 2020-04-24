import styled from "styled-components";

export const Container = styled.table`
  width: 100%;
  margin-top: 50px;
  border-spacing: 0 5px;
  color: #181818;
  max-height: 300px;

  th {
    text-align: center;
    padding: 10px;
    border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  }

  tbody {
    tr {
      height: 40px;

      & + tr {
        td {
          border-top: 1px solid rgba(0, 0, 0, 0.1);
        }
      }
      td {
        text-align: center;

        padding: 10px 0;
        a {
          text-decoration: none;
          transition: opacity 0.2s;
          &:hover {
            opacity: 0.8;
          }
        }

        button {
          border: 0;
          background: transparent;

          transition: opacity 0.2s;
          &:hover {
            opacity: 0.8;
          }
        }
      }
    }
  }
`;

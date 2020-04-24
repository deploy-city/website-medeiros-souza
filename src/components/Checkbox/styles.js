import styled from "styled-components";

export const Container = styled.label`
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  margin-top: 0;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border-radius: 6px;

  &:hover {
    input {
      & ~ span {
        background-color: #ccc;
      }
    }
  }

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;

    &:checked {
      & ~ span {
        background-color: #2196f3;

        &::after {
          display: block;
        }
      }
    }
  }

  span {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;

    &::after {
      content: "";
      position: absolute;
      display: none;

      left: 9px;
      top: 5px;
      width: 5px;
      height: 10px;
      border: solid white;
      border-width: 0 3px 3px 0;
      border-radius: 6px;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }
`;

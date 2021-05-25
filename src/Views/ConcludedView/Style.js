import styled from "styled-components";

export const Background = styled.div``;

export const Main = styled.main`
  display: flex;
  justify-content: space-evenly;
  flex-flow: wrap;
`;

export const Form = styled.form`
  width: 300px;
  height: 360px;
  margin: 10px;
  padding: 25px 10px;
  background-color: #fff;
  color: #000;
  border: 1px solid;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  input {
    width: 80%;
    font-size: 14px;
    outline: none;
    border: none;
    border-bottom: 1px solid lightgray;
  }
`;

export const Button = styled.button`
  width: 185px;
  height: 35px;
  border-radius: 20px;
  border: none;
  font-size: 14px;
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    width: 185px;
    background-color: #1ed825d4;
    color: white;
  }
`;

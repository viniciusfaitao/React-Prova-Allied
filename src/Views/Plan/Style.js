import styled from "styled-components";

export const Background = styled.div``;

export const Main = styled.main`
  display: flex;
  justify-content: space-evenly;
  flex-flow: wrap;
`;

export const Section = styled.section`
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
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.p`
  font-size: 22px;
  font-weight: bold;
  margin: 0;
`;

export const Info = styled.div`
  padding: 5px;
  font-size: 16px;
  display: flex;
  align-items: center;
  white-space: pre;

  p {
    font-size: 18px;
    font-weight: bold;
    margin: 0;
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
    background-color: #545454e0;
    color: white;
  }
`;

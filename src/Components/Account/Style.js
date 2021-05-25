import styled from "styled-components";

export const AccountBackground = styled.div`
  width: 100%;
  margin: 15px 0;
`;

export const Account = styled.div`
  width: 450px;
  padding: 25px 10px;
  background-color: #fff;
  color: #000;
  border: 1px solid;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Main = styled.main`
  width: 80%;
  display: flex;
  flex-direction: column;
`;

export const Info = styled.p`
  font-size: 22px;
  display: flex;
  margin: 5px;

  p {
    margin: 0 10px;
    font-weight: bold;
  }
`;

export const Total = styled.div`
  margin: 25px 0;
  align-self: center;

  p {
    margin: 0 10px;
    font-weight: bold;
  }
`;

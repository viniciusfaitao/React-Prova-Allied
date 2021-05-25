import styled from "styled-components";

export const FooterBackground = styled.div`
  height: 120px;
  background-color: #fff;
  display: flex;
  align-items: center;
  place-content: space-between;
`;

export const FooterLeft = styled.div`
  display: flex;

  img {
    width: 160px;
    height: 120px;
    border-radius: 80px;
  }
`;

export const FooterCenter = styled.div``;

export const FooterRight = styled.div`
  margin-right: 20px;

  p {
    font-size: 15px;
    color: #000;

    a {
      color: #000;
    }
  }
`;

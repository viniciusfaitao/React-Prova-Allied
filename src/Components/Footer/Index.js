import React from "react";
import {
  FooterBackground,
  FooterLeft,
  FooterCenter,
  FooterRight,
} from "./Style";
import loading from "../../Utils/Gifs/loading.gif";

export const FooterComponent = () => {
  return (
    <FooterBackground>
      <FooterLeft>
        <img alt={"Loading"} src={loading} />
      </FooterLeft>
      <FooterCenter></FooterCenter>
      <FooterRight>
        <p>
          Created by{" "}
          <a href="https://github.com/viniciusfaitao/">Vinicius Faitão</a>
        </p>
      </FooterRight>
    </FooterBackground>
  );
};

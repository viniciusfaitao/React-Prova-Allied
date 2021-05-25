import React, { useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";
import { HeaderBackground, HeaderCenter } from "./Style";

export const HeaderComponent = () => {
  const { user } = useContext(UserContext);

  return (
    <HeaderBackground>
      <HeaderCenter>
        {!user.concluded ? (
          !user.planSku ? (
            !user.plataformSku ? (
              <h1>Escolha uma plataforma!</h1>
            ) : (
              <h1>Escolha um plano!</h1>
            )
          ) : (
            <h1>Preencha com seus dados!</h1>
          )
        ) : (
          <h1>Obrigado por adquirir um pacote conosco!</h1>
        )}
      </HeaderCenter>
    </HeaderBackground>
  );
};

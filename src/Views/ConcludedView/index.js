import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AccountComponent } from "../../Components/Account/Index";
import { UserContext } from "../../Contexts/UserContext";
import { Background } from "./Style";

export const ConcludedView = () => {
  const { user } = useContext(UserContext);

  return (
    <Background>
      {!user.plataformSku && <Redirect to="/plataformas" />}
      {!user.planSku && <Redirect to="/plataformas" />}

      <AccountComponent />
    </Background>
  );
};

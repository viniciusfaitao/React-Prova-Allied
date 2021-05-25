import React, { useContext } from "react";
import InputMask from "react-input-mask";
import { Link, Redirect } from "react-router-dom";
import { AccountComponent } from "../../Components/Account/Index";
import { UserContext } from "../../Contexts/UserContext";
import { Background, Main, Form, Button } from "./Style";

export const UserView = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <Background>
      {!user.plataformSku && <Redirect to="/plataformas" />}
      {!user.planSku && <Redirect to="/plataformas" />}

      <AccountComponent />
      <Main>
        <Form>
          <InputMask
            type="text"
            placeholder="Nome"
            onChange={(text) => setUser({ ...user, name: text.target.value })}
          />
          <InputMask
            type="text"
            placeholder="E-mail"
            onChange={(text) => setUser({ ...user, email: text.target.value })}
          />
          <InputMask
            type="date"
            placeholder="Data de nascimento"
            onChange={(text) =>
              setUser({ ...user, birthday: text.target.value })
            }
          />
          <InputMask
            mask="999.999.999-99"
            placeholder="CPF"
            onChange={(text) => setUser({ ...user, cpf: text.target.value })}
          />
          <InputMask
            mask="(999)99999-9999"
            placeholder="Telefone"
            onChange={(text) => setUser({ ...user, number: text.target.value })}
          />
          <Link to="/concluido">
            <Button
              disabled={!user.number} //Aqui seria valido utilizar uma validação de inputs e se todos estiverem corretos liberar o botão.
              onClick={() => setUser({ ...user, concluded: true })}
            >
              Confirmar
            </Button>
          </Link>
        </Form>
      </Main>
    </Background>
  );
};

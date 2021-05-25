import React, { useContext, useEffect, useState } from "react";
import { PlanContext } from "../../Contexts/Plan";
import { PlataformContext } from "../../Contexts/Plataform";
import { UserContext } from "../../Contexts/User";
import { AccountBackground, Account, Info, Main, Total } from "./Style";

export const AccountComponent = () => {
  const { user } = useContext(UserContext);
  const { plataforms } = useContext(PlataformContext);
  const { plans } = useContext(PlanContext);

  const [total, setTotal] = useState();

  useEffect(() => {
    if (user.concluded) {
      if (user.modemValue) {
        let modemValue = parseInt(user.modemValue);
        let planValue = parseInt(user.planValue);
        let totalValue = planValue + modemValue;

        setTotal(totalValue);
      } else {
        setTotal(user.planValue);
      }
    }
  }, [user]);

  return (
    <AccountBackground>
      <Account>
        {user.concluded ? (
          <Total>
            <Info>
              <p>Total do pedido: R$ {total}</p>
            </Info>
          </Total>
        ) : (
          <h4>Você selecionou</h4>
        )}
        <Main>
          {plataforms.map(
            (plataform) =>
              plataform.sku === user.plataformSku && (
                <Info>
                  Plataforma: <p>{plataform.nome}</p>
                </Info>
              )
          )}
          {plans.map(
            (plan) =>
              plan.sku === user.planSku && (
                <Info>
                  Franquia: <p>{plan.franquia}</p>
                </Info>
              )
          )}
          {user.concluded ? (
            <>
              <Info>
                Nome: <p>{user.name}</p>
              </Info>
              <Info>
                Data de nascimento: <p>{user.birthday}</p>
              </Info>
              <Info>
                CPF: <p>{user.cpf}</p>
              </Info>
              <Info>
                E-mail: <p>{user.email}</p>
              </Info>
              <Info>
                Telefone: <p>{user.number}</p>
              </Info>
            </>
          ) : null}
        </Main>
      </Account>
    </AccountBackground>
  );
};

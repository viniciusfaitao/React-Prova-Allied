import React, { useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import { AccountComponent } from "../../Components/Account/Index";
import { LoadingPage } from "../../Components/LoadingPage/Index";
import { PlanContext } from "../../Contexts/Plan";
import { UserContext } from "../../Contexts/User";
import {
  Background,
  Main,
  Section,
  Content,
  Button,
  Title,
  Info,
} from "./Style";

export const PlanView = () => {
  const { plans } = useContext(PlanContext);
  const { user, setUser } = useContext(UserContext);

  return (
    <Background>
      {!user.plataformSku && <Redirect to="/plataformas" />}

      <Main>
        {plans ? (
          <>
            <AccountComponent />
            {plans.map(
              (plan) =>
                plan.ativo && (
                  <Section key={plan.sku}>
                    <Title>{plan.franquia}</Title>
                    <Info>
                      Valor do plano: <p>R$ {plan.valor}</p>
                    </Info>
                    <Content>
                      {plan.aparelho ? (
                        <>
                          <Title>{plan.aparelho.nome}</Title>
                          <Info>
                            Valor: <p>R$ {plan.aparelho.valor}</p>
                          </Info>
                          {plan.aparelho.valorParcela !== false ? (
                            <Info>
                              Número de parcelas:{" "}
                              <p>{plan.aparelho.numeroParcelas}</p>
                            </Info>
                          ) : null}

                          {plan.aparelho.valorParcela !== false ? (
                            <Info>
                              Valor na parcela:{" "}
                              <p>R$ {plan.aparelho.valorParcela}</p>
                            </Info>
                          ) : (
                            <p>Este plano não oferece parcelas para o modem!</p>
                          )}
                        </>
                      ) : (
                        <p>Este plano não requer modem!</p>
                      )}
                    </Content>
                    <Link to="/usuario">
                      <Button
                        value={plan.sku}
                        onClick={(value) => {
                          plan.aparelho
                            ? setUser({
                                ...user,
                                planSku: value.target.value,
                                planValue: plan.valor,
                                modemValue: plan.aparelho.valor,
                              })
                            : setUser({
                                ...user,
                                planSku: value.target.value,
                                planValue: plan.valor,
                              });
                        }}
                      >
                        Selecionar
                      </Button>
                    </Link>
                  </Section>
                )
            )}
          </>
        ) : (
          <LoadingPage />
        )}
      </Main>
    </Background>
  );
};

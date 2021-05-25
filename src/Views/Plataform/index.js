import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LoadingPage } from "../../Components/LoadingPage/Index";
import { PlataformContext } from "../../Contexts/Plataform";
import { UserContext } from "../../Contexts/User";
import { Images } from "../../Utils/Images";
import {
  Background,
  Main,
  Section,
  Button,
  Title,
  Image,
  Description,
} from "./Style";

export const PlataformView = () => {
  const { plataforms } = useContext(PlataformContext);
  const { user, setUser } = useContext(UserContext);

  return (
    <Background>
      <Main>
        {plataforms ? (
          plataforms.map((plataform) => (
            <Section key={plataform.sku}>
              <Title>{plataform.nome}</Title>
              {Images.map((image) =>
                image.name === plataform.nome ? <Image src={image.src} /> : null
              )}
              <Description>
                {plataform.descricao.replace(/[^\w\-]+/g, " ")}
              </Description>
              <Link to="/planos">
                <Button
                  value={plataform.sku}
                  onClick={(value) =>
                    setUser({ ...user, plataformSku: value.target.value })
                  }
                >
                  Selecionar
                </Button>
              </Link>
            </Section>
          ))
        ) : (
          <LoadingPage />
        )}
      </Main>
    </Background>
  );
};

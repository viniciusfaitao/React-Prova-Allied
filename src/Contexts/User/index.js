import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [user, setUser] = useState({
    name: undefined,
    email: undefined,
    birthday: undefined,
    cpf: undefined,
    number: undefined,
    plataformSku: undefined,
    planSku: undefined,
    planValue: undefined,
    modemValue: undefined,
    concluded: false,
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

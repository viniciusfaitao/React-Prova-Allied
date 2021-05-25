import React, { createContext, useEffect, useState } from "react";
import { UsePlataform } from "../../Services/PlataformApi";

export const PlataformContext = createContext();

export const PlataformProvider = (props) => {
  const [plataforms, setPlataforms] = useState([]);

  const fetchData = async () => {
    let result = await UsePlataform();
    setPlataforms(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <PlataformContext.Provider value={{ plataforms }}>
      {props.children}
    </PlataformContext.Provider>
  );
};

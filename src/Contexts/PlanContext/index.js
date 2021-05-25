import React, { createContext, useContext, useEffect, useState } from "react";
import { UsePlan } from "../../Services/PlanApi";
import { UserContext } from "../UserContext";

export const PlanContext = createContext();

export const PlanProvider = (props) => {
  const { user } = useContext(UserContext);
  const [plans, setPlans] = useState([]);

  const fetchData = async () => {
    let result = await UsePlan(user.plataformSku);
    setPlans(result);
  };

  useEffect(() => {
    user.plataformSku && fetchData();
  }, [user.plataformSku]);

  return (
    <PlanContext.Provider value={{ plans }}>
      {props.children}
    </PlanContext.Provider>
  );
};

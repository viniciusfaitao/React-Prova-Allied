import axios from "axios";

const url = "http://private-59658d-celulardireto2017.apiary-mock.com/planos";

export const UsePlan = async (actualPlataform) => {
  try {
    const response = await axios.get(`${url}/${actualPlataform}`);
    return response.data.planos;
  } catch (error) {
    console.error("Error cause: " + error.message);
    return error.message;
  }
};

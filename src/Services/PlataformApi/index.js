import axios from "axios";

const url =
  "http://private-59658d-celulardireto2017.apiary-mock.com/plataformas";

export const UsePlataform = async () => {
  try {
    const response = await axios.get(`${url}`);
    return response.data.plataformas;
  } catch (error) {
    console.error("Error cause: " + error.message);
    return error.message;
  }
};

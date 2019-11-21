import axios from "axios";

export const getDentistRevenue = async token => {
  return await axios.get("/api/faturamento/dentist", {
    headers: {
      Authorization: token
    }
  });
};

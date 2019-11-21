import axios from "axios";

export const registerAppointment = async (fields, token) => {
  return await axios.post("/api/consulta/register", fields, {
    headers: {
      Authorization: token
    }
  });
};

export const getAppointments = async token => {
  return await axios.get("/api/consulta/getall", {
    headers: {
      Authorization: token
    }
  });
};

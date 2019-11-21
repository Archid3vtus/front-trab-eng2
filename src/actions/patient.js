import axios from "axios";

export const getPatients = async token => {
  return await axios.get("/api/paciente/getall", {
    headers: {
      Authorization: token
    }
  });
};

export const registerPatient = async (patientFields, token) => {
  return await axios.post("/api/paciente/register", patientFields, {
    headers: {
      Authorization: token
    }
  });
};

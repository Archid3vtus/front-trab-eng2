import axios from "axios";

export const loginUser = async userData => {
    return await axios.post("/api/usuario/login", userData);
}
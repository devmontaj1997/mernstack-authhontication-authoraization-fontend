import axios from "axios";

const API = axios.create({
  baseURL:
    "https://mernstack-authhontication-authoraization.onrender.com/api/v1",
  withCredentials: true,
});
export default API;

import axios from "axios";

const api = axios.create({
  baseURL: "https://fcamara-api.herokuapp.com",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;

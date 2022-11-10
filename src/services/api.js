import axios from "axios";

const api = axios.create({
  baseURL: "https://fcamara-api.herokuapp.com",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export default api;

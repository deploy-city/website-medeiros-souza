import axios from "axios";

export const baseURL = "http://api.medeirossouza.com";

const api = axios.create({
  baseURL: `${baseURL}/api`,
});

export default api;

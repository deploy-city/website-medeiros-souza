import axios from "axios";

export const baseURL = "http://api-medeiros-souza.herokuapp.com";

const api = axios.create({
  baseURL: `${baseURL}/api`,
});

export default api;

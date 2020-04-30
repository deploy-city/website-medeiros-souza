import axios from "axios";

// export const baseURL = "https://pacific-coast-14733.herokuapp.com/";
export const baseURL = "http://localhost:8000";

const api = axios.create({
  baseURL: `${baseURL}/api`,
});

export default api;

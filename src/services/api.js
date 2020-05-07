import axios from "axios";

export const storageUrl = "http://api.medeirossouza.com/storage/news";
export const baseURL = "https://api-medeiros-souza.herokuapp.com";

const api = axios.create({
  baseURL: `${baseURL}/api`,
});

export default api;

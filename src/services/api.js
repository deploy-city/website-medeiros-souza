import axios from "axios";

// export const baseURL = "https://pacific-coast-14733.herokuapp.com/";
export const baseURL = "http://localhost:3333/api";

export default axios.create({
  baseURL,
});

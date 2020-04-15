import axios from "axios";

export const baseURL = "https://pacific-coast-14733.herokuapp.com/";

export default axios.create({
  baseURL,
});

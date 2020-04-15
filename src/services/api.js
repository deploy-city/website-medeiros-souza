import axios from "axios";

export const baseURL = "http://cityconnect.email-sender.com/";

export default axios.create({
  baseURL,
});

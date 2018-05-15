import axios from "axios";

export const HTTP = axios.create({
  baseURL: `https://suggestions.dadata.ru/suggestions/api/4_1/rs/`,
  headers: {
    Authorization: "Token 12fd1e9915b88fa8694697181c3bb0dfdad3aaef",
    "Content-Type": "application/json",
    Accept: "application/json"
  }
});

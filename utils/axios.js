import axios from "axios";
import { setUserData } from "./common";

export const registerUser = (username, email, password) => {
  return axios({
    method: "POST",
    url: "http://localhost:3000/auth/register",
    data: {
      username,
      email,
      password,
    },
  });
};

export const loginUser = (email, password) => {
  return axios({
    method: "POST",
    url: "http://localhost:3000/auth/login",
    data: {
      email,
      password,
    },
  }).then((res) => {
    setUserData(res.data);
  });
};

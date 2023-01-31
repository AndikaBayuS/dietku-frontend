import axios from "axios";
import { getUserData, setUserData } from "./common";

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

export const getFoodsData = () => {
  return axios({
    method: "GET",
    url: "http://localhost:3000/foods",
  });
};

export const calCalculator = (height, weight, age, gender) => {
  let userData = getUserData();

  return axios({
    method: "POST",
    url: `http://localhost:3000/users/${userData.userId}`,
    data: {
      tinggi_badan: height,
      berat_badan: weight,
      umur: age,
      jk: gender,
    },
  });
};

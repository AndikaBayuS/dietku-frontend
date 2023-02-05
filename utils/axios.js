import axios from "axios";
import { getUserData, setUserData } from "./common";

const baseUrl = process.env.NEXT_PUBLIC_BASE_API_URL;
const userData = getUserData();

export const registerUser = (username, email, password) => {
  return axios({
    method: "POST",
    url: `${baseUrl}/auth/register`,
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
    url: `${baseUrl}/auth/login`,
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
    url: `${baseUrl}/foods`,
  });
};

export const calCalculator = (height, weight, age, gender, setUserBMI) => {
  return axios({
    method: "POST",
    url: `${baseUrl}/users/${userData.userId}`,
    data: {
      tinggi_badan: height,
      berat_badan: weight,
      umur: age,
      jk: gender,
    },
    headers: {
      Authorization: `Bearer ${userData?.token}`,
    }
  }).then((res) => {
    setUserBMI(res.data.dataUser.kalori);
  });
};

export const getUserInfo = () => {
  return axios({
    method: "GET",
    url: `${baseUrl}/users/${userData?.userId}`,
    headers: {
      Authorization: `Bearer ${userData?.token}`,
    }
  });
};

export const getUserAuth = () => {
  return axios({
    method: "GET",
    url: `${baseUrl}/auth/users/${userData?.userId}`,
    headers: {
      Authorization: `Bearer ${userData?.token}`,
    }
  });
};

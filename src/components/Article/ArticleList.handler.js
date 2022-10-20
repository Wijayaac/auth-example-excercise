import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const getToken = () => {
  const { token } = JSON.parse(localStorage.getItem("user"));
  return token;
};

export const getArticles = async () => {
  let token = getToken();
  const res = await axios.get(`${API_URL}articles`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
};

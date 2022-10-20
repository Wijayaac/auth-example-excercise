import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const getUser = async (params) => {
  const { data } = await axios.post(`${API_URL}tokens`, {
    username: params.username,
    password: params.password,
  });

  return data;
};

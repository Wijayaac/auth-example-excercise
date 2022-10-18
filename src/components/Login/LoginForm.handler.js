import axios from "axios";

export const getUser = async (params) => {
  const { data } = await axios.get("http://localhost:3004/users", {
    params: {
      email: params.email,
    },
  });

  if (data.length < 1) {
    let notFound = new Error();
    notFound.message = "User not found";
    notFound.statusCode = 404;

    throw notFound;
  }

  if (data[0].password !== params.password) {
    let unAuthorize = new Error();
    unAuthorize.message = "User not authorized";
    unAuthorize.statusCode = 403;
    throw unAuthorize;
  }

  delete data[0].password;
  return data;
};

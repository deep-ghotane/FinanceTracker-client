import axios from "axios";
const apiUrl = import.meta.env.VITE_APP_API_URL + "/api/v1";

// axios helper
const apiProcessor = async ({ method, data, url, headers }) => {
  try {
    let response = await axios({
      method: method,
      url: url,
      data: data,
      headers: headers,
    });

    return response.data;
  } catch (err) {
    return {
      status: false,
      message: err?.response?.data?.message || err.message,
    };
  }
};

// create user
export const postUser = async (obj) => {
  // let response = await axios.post(`${apiUrl}/auth`, obj);
  // return response.data;

  return apiProcessor({
    method: "post",
    url: `${apiUrl}/auth`,
    data: obj,
  });
};

// login user
export const loginUser = async (obj) => {
  // let response = await axios.post(`${apiUrl}/auth/login`, obj);
  // return response.data;

  return apiProcessor({
    method: "post",
    url: `${apiUrl}/auth/login`,
    data: obj,
  });
};

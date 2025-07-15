import axios from "axios";
//get url from env
//update later
const apiUrl = "http://localhost:3000/api/v1";

//axios helper

// create user
export const postUser = async (obj) => {
  let response = await axios.post(`${apiUrl}/auth`, obj);
  return response.data;
};

// login user
export const loginUser = async (obj) => {
  let response = await axios.post(`${apiUrl}/auth/login`, obj);
  return response.data;
};

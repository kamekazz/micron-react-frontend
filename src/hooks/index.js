import axios from "axios";
import useUser from "./useUser";
import useRooms from "./useRooms";
import useTime from "./useTime";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const token = localStorage.getItem("token");

if (token) {
  axios.defaults.headers.common["Authorization"] = "JWT " + token;
} else {
  if (location.pathname !== "/login" && location.pathname !== "/register") {
    location.pathname = "login"
  }
}

axios.interceptors.response.use(function (response) {
  // console.log(response)


  return response;
});

export { useUser, useRooms, useTime };

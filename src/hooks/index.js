import axios from "axios";
import useUser from "./useUser";
import useRooms from "./useRooms";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const token = localStorage.getItem("token")

if (token){
    axios.defaults.headers.common["Authorization"] = "JWT " + token;
}

axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    location.href = "/login"
    console.log("LLOOOOL")
    return Promise.reject(error);
});// yes thanks great job i did

export { useUser, useRooms };

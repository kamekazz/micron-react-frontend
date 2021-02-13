import axios from "axios";
import useUser from "./useUser";
import useRooms from "./useRooms";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const token = localStorage.getItem("token")

if (token){
    axios.defaults.headers.common["Authorization"] = "JWT " + token;
}


export { useUser, useRooms };

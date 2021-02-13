import axios from "axios";
import useUser from "./useUser";
import useRooms from "./useRooms";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

export { useUser, useRooms };

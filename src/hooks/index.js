import axios from "axios";
import useUser from "./useUser";
import useRooms from "./useRooms";
import useTime from "./useTime";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const token = localStorage.getItem("token");

function redirectToLoginIfNotAtUnauthenticatedView() {
  if (location.pathname !== "/login" && location.pathname !== "/register") {
    location.pathname = "login"
  }

}

if (token) {
  axios.defaults.headers.common["Authorization"] = "JWT " + token;
} else {
  redirectToLoginIfNotAtUnauthenticatedView()
}

axios.get("/api-token-verify/").then(() => {
}).catch(() => {
  redirectToLoginIfNotAtUnauthenticatedView()
})

export { useUser, useRooms, useTime };

import axios from "axios";
import { useHistory } from "react-router-dom";

export default function useUser() {
  const history = useHistory();

  function setToken(token) {
    localStorage.setItem("token", token);
    axios.defaults.headers.common["Authorization"] = "JWT " + token;
  }

  function authenticateUser(username, password) {
    return new Promise((resolve, reject) => {
      axios("api-token-auth", {
        method: "POST",
        data: {
          username: username,
          password: password,
        },
      })
        .then((res) => {
          setToken(res.data.token);
          history.push("/");
          localStorage.setItem("username", username);
          resolve();
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  function verifyToken() {}

  function signOut() {
    localStorage.clear();
    history.push("/login");
  }

  function registerUser(username, password) {
    axios("users/create", {
      method: "post",
      data: {
        username: username,
        password: password,
      },
    })
      .then((res) => {
        authenticateUser(username, password);
      })
      .catch((err) => {
        throw err;
      });
  }

  function getUsers() {
    return axios("users/");
  }

  return {
    authenticateUser,
    verifyToken,
    signOut,
    registerUser,
    getUsers,
  };
}

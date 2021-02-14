import axios from "axios";
import { useHistory } from "react-router-dom"

export default function useUser() {

  const history = useHistory()

  function setToken(token) {
    localStorage.setItem("token", token)
    axios.defaults.headers.common["Authorization"] = "JWT " + token;
  }

  function authenticateUser(username, password) {
    axios('api-token-auth', {
      method: "POST",
      data: {
        username: username,
        password: password
      },
    }).then(res => {
      setToken(res.data.token);
      history.push("/")
    }).catch(err => {
      throw(err)
    });
  }

  function verifyToken(token) {}

  function signOut() {}

  function registerUser(username, password){
    axios("users/create", {
      method: "post",
      data: {
        username: username,
        password: password
      },
    }).then(res => {
      history.push("/login")
    }).catch(err => {
      throw(err)
    });
  }

  return {
    authenticateUser,
    verifyToken,
    signOut,
    registerUser,
  };
}

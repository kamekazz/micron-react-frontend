import axios from "axios";

export default function useUser() {
  function setToken(token) {
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
  }

  function authenticateUser(username, password) {
    const token = "123";

    setToken(token);
  }

  function verifyToken(token) {}

  function signOut() {}

  return {
    authenticateUser,
    verifyToken,
    signOut,
  };

}
import axios from "axios";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

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

axios("/api-token-verify/", {
    method: "POST",
    data: { token }
}).then(() => {
}).catch(() => {
    redirectToLoginIfNotAtUnauthenticatedView()
})

ReactDOM.render(<App />, document.getElementById("app"));

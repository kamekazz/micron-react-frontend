import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Home/Home";
import Room from "../Room/Room";
import Login from "../Login/Login";
import Register from "../Register/Register";
import NoPage from "../NoPage/NoPage";

function Routes() {
  return (
    <Switch>
      <Route path="/room/:room_id" component={Room} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/" component={Home} />
      <Route component={NoPage} />
    </Switch>
  );
}

export default Routes;

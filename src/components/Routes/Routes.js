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
      <Route exact path="/room/:room_id" component={Room} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/" component={Home} />
      <Route component={NoPage} />
    </Switch>
  );
}

export default Routes;

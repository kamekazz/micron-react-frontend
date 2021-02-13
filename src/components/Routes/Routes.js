import React from "react";
import { Switch, Route } from "react-router-dom";
import RoomList from "../RoomList/RoomList";
import Room from "../Room/Room";
import Login from "../Login/Login"

function Routes() {
  return (
    <Switch>
      <Route path="/room/:room_id" component={Room} />
      <Route exact path="/" component={RoomList} />
      <Route exact path = "/login" component = {Login} />
    </Switch>
  );
}

export default Routes;

import React from 'react'
import { Switch, Route } from "react-router-dom";
import RoomList from "../RoomList/RoomList";
import Room from "../Room/Room";

function Routes() {
    return (
        <Switch>
            <Route path="/room/:room_id" component={Room} />
            <Route exact path="/" component={RoomList} />
        </Switch>
    )
}

export default Routes

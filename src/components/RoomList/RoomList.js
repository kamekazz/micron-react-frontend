import React, { useState, useEffect } from "react";
import { useRooms } from "../../hooks";
import CreateRoom from "./CreateRoom/CreateRoom";
import { makeStyles, Box, Grid, CardActionArea } from "@material-ui/core";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
const useStyles = makeStyles(() => ({
  root: {},
}));

function RoomList() {
  const { getRooms, getRoomMessages } = useRooms();
  const [rooms, setRooms] = useState([]);
  const classes = useStyles();
  const { room_id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    loadRooms();
  }, []);

  function loadRooms() {
    getRooms().then((res) => {
      setRooms(res.data.results);
    });
  }

  function chanceRoom() {
    dispatch({ type: "CLEAR_MESSAGES" });
    getRoomMessages()
      .then((res) => {
        dispatch({ type: "LOAD_MESSAGES", payload: res.data.results.reverse() });
      })
      .catch((err) => {
        throw err;
      });
  }

  return (
    <Box px={2} className={classes.root}>
      <CreateRoom loadRooms={loadRooms} />
      Create New Room
      <Grid container>
        {rooms.map((room) => (
          <Grid item key={room.id} xs={12} onClick={chanceRoom}>
            <CardActionArea component={NavLink} to={`/room/${room.id}`}>
              <Box p={2} color="primary">
                <Grid container alignItems="center">
                  <Grid item>
                    <MeetingRoomIcon />
                  </Grid>
                  <Grid item>
                    <Box color={room.id.toString() === room_id ? "primary.light" : ""}>
                      {room.name}
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </CardActionArea>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default RoomList;

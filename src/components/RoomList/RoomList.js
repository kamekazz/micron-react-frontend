import React, { useState, useEffect } from "react";
import { useRooms } from "../../hooks";
import CreateRoom from "./CreateRoom/CreateRoom";
import { makeStyles, Box, Grid, CardActionArea } from "@material-ui/core";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import { useParams } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {},
}));

function RoomList() {
  const { getRooms } = useRooms();
  const [rooms, setRooms] = useState([]);
  const classes = useStyles();
  const { room_id } = useParams();

  console.log(room_id);

  useEffect(() => {
    loadRooms();
  }, []);

  function loadRooms() {
    getRooms().then((res) => {
      setRooms(res.data.results);
    });
  }

  return (
    <Box px={2} className={classes.root}>
      Rooms:
      <CreateRoom loadRooms={loadRooms} />
      <Grid container>
        {rooms.map((room) => (
          <Grid item key={room.id} xs={12}>
            <CardActionArea
              onClick={() => {
                location.href = `/room/${room.id}`;
              }}
            >
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

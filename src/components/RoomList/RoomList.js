import React, { useState, useEffect } from "react";
import { useRooms } from "../../hooks";
import CreateRoom from "./CreateRoom/CreateRoom";
import { makeStyles, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.grey[200],
  },
}));

function RoomList() {
  const { getRooms } = useRooms();
  const [rooms, setRooms] = useState([]);
  const classes = useStyles();

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
      {rooms.map((room) => (
        <div key={room.id}>
          <a href={`/room/${room.id}`}>{room.name}</a>
        </div>
      ))}
    </Box>
  );
}

export default RoomList;

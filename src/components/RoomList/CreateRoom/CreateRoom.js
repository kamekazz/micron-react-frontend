import React, { useState } from "react";
import {
  Dialog,
  Box,
  Typography,
  TextField,
  Button,
  makeStyles,
  IconButton,
} from "@material-ui/core";
import { useRooms } from "../../../hooks";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

const useStyles = makeStyles({
  dialog: {
    position: "absolute",
    top: 50,
    minWidth: "400px",
  },
});

function CreateRoom({ loadRooms }) {
  const { createRoom } = useRooms();
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [roomName, setRoomName] = useState("");

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }
  function handleUserKeyDown(e) {
    if (e.key === "Enter") {
      handleSubmit();
    }
  }

  function handleEnterRoomName(e) {
    setRoomName(e.target.value);
  }

  function handleSubmit() {
    createRoom(roomName).then(() => {
      setOpen(false);
      loadRooms();
    });
  }
  return (
    <>
      <IconButton onClick={handleOpen} size="small">
        <AddCircleOutlineIcon />
      </IconButton>
      <Dialog
        classes={{
          paper: classes.dialog,
        }}
        open={open}
        onClose={handleClose}
      >
        <Box py={2} px={4}>
          <Typography variant="h3">Create Room</Typography>
          <Box mt={3}>
            <TextField
              label="room name"
              value={roomName}
              onChange={handleEnterRoomName}
              onKeyDown={handleUserKeyDown}
            ></TextField>
          </Box>

          <Box mt={3}>
            <Button onClick={handleSubmit} color="primary" variant="contained">
              create
            </Button>
          </Box>
        </Box>
      </Dialog>
    </>
  );
}

export default CreateRoom;

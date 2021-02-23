/* eslint-disable prettier/prettier */
import { Grid, Typography, Box } from "@material-ui/core";
import React from "react";
import RoomList from "../RoomList/RoomList";
import Room from "../Room/Room";

function Home() {
  function getUsername() {
    const user = localStorage.getItem("username");
    return user;
  }

  return (
    <Grid container alignItems="stretch">
      <Grid item xs={12}>
        <Box display="flex" alignItems="center" justifyContent="center" margin="auto">
          <Typography variant="h3" align="center">
            Hello, {getUsername()}!
          </Typography>
        </Box>
        <Box>
          <Typography variant="h4" align="center">Select a room and start chatting.</Typography>
          <RoomList />
        </Box>
      </Grid>
    </Grid>
  );
}

export default Home;

import { Grid, Typography, Box } from "@material-ui/core";
import React from "react";
import RoomList from "../RoomList/RoomList";
import Room from "../Room/Room";

function Home() {
  return (
    <Grid container alignItems="stretch">
      <Grid item xs={12}>
        <Box maxWidth="400px" justifyContent="center" margin="auto">
          <Typography variant="h5" align="center">
            Welcome to Micron! You can create a new room by clicking the + next to the
            room, or you can click on an existing room to start chatting. Good luck!
          </Typography>
        </Box>
        <RoomList />
      </Grid>
    </Grid>
  );
}

export default Home;

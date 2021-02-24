/* eslint-disable prettier/prettier */
import { Grid, Typography, Box } from "@material-ui/core";
import React from "react";
import RoomList from "../RoomList/RoomList";
import { fadeIn } from "react-animations";
import Radium, {StyleRoot} from "radium";

const styles = {
  bounce: {
    animation: "x 2s",
    animationName: Radium.keyframes(fadeIn, "bounce")
  }
}

function Home() {
  function getUsername() {
    const user = localStorage.getItem("username");
    return user;
  }

  return (
    <StyleRoot>
      <div className="test" style={styles.bounce}>
        <Grid container alignItems="stretch" className="test" style={styles.bounce}>
          <Grid item xs={12}>
            <Box display="flex" alignItems="center" justifyContent="center" margin="auto">
              <Typography variant="h3" align="center">
                Hello, {getUsername()}!
              </Typography>
            </Box>
            <Box>
              <Typography variant="h4" align="center">
                Select a room and start chatting.
              </Typography>
              <RoomList />
            </Box>
          </Grid>
        </Grid>
      </div>
    </StyleRoot>
  );
}

export default Home;

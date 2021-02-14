import React from "react";
import { Grid, Typography } from "@material-ui/core";

function Message({ message }) {
  return (
    <Grid container justify="space-between">
      <Grid item>
        {message.author}: {message.text}
      </Grid>
      <Grid item>{new Date(message.created_at).toLocaleString()}</Grid>
    </Grid>
  );
}

export default Message;

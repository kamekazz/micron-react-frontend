import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { useTime } from "../../hooks";

function Message({ message }) {
  const { formatDate } = useTime();

  return (
    <Grid container justify="space-between">
      <Grid item>
        {message.author}: {message.text}
      </Grid>
      <Grid item>{formatDate(message.created_at)}</Grid>
    </Grid>
  );
}

export default Message;

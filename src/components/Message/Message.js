import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { useTime } from "../../hooks";

function Message({ message, showDate }) {
  const { formatDate } = useTime();

  return (
    <Grid container justify="space-between">
      <Grid item>
        <Typography variant="body2">
          {message.author}: {message.text}
        </Typography>
      </Grid>
      <Grid item>{showDate && formatDate(message.created_at)}</Grid>
    </Grid>
  );
}

export default Message;

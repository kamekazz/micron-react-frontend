import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { useTime } from "../../hooks";

function Message({ message, showDate }) {
  const { formatDate } = useTime();

  function checkURL(url) {
    if (url.split(" ").length > 1) return false;

    return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
  }

  return (
    <Grid container justify="space-between">
      <Grid item>
        <Typography variant="body2">
          {message.author}:{" "}
          {checkURL(message.text) ? (
            <img width="100px" src={message.text} />
          ) : (
            message.text
          )}
        </Typography>
      </Grid>
      <Grid item>
        <Typography>{showDate && formatDate(message.created_at)}</Typography>
      </Grid>
    </Grid>
  );
}

export default Message;

/* eslint-disable prettier/prettier */
import React from "react";
import { Grid, Typography, Box, Button } from "@material-ui/core";
import { useTime, useRooms } from "../../hooks";
//import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import ReactTextFormat from "react-text-format";
import EmojiPicker from "../EmojiPicker/EmojiPicker"

function Message({ message, showDate }) {
  const { formatDate } = useTime();
  const { createReaction } = useRooms();

  function checkURL(url) {
    if (url.split(" ").length > 1) return false;

    return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
  }

  function handleReaction(e) {
    createReaction(message.message_id, e.native);
  }

  return (
    <Grid container justify="space-between">
      <Grid item>
        <Typography variant="body2">
          {message.author}:{" "}
          {checkURL(message.text) ? (
            <img width="100px" src={message.text} />
          ) : (
            <ReactTextFormat>{message.text}</ReactTextFormat>
          )}
        </Typography>
        <Box>
          {
            message.reactions.map(reaction => (
              reaction.text
            ))
          }
        </Box>
      </Grid>
      <Grid item>
        <Typography>{showDate && formatDate(message.created_at)}
          <EmojiPicker onSelect = {handleReaction}></EmojiPicker>
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Message;

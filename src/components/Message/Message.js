/* eslint-disable max-len */
/* eslint-disable prettier/prettier */
import React from "react";
import { Grid, Typography, Box, makeStyles, Badge, Button } from "@material-ui/core";
import { useTime, useRooms, useReaction } from "../../hooks";
//import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import ReactTextFormat from "react-text-format";
import EmojiPicker from "../EmojiPicker/EmojiPicker"

const useStyles = makeStyles((theme) => ({
  row: {
    position: "relative",
    "&:hover > *": {
      visibility: "visible !important",
    },
  },
  overlay: {
    visibility: "hidden",
    position: "absolute",
    top: theme.spacing(1),
    right: theme.spacing(1.5),
  },
  profilepic: {
    background: "red",
    borderRadius: "50%"
  },
}));

function Message({ message, showDate }) {
  const { formatDate } = useTime();
  const { formatReaction } = useReaction();
  const classes = useStyles();
  const { createReaction } = useRooms();

  function checkURL(url) {
    if (url.split(" ").length > 1) return false;

    return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
  }

  function handleReaction(e) {
    createReaction(message.message_id, e.native);
  }
  
  const emojiSet = formatReaction(message.reactions);

  return (
    <Grid container className={classes.row}>
      {
        showDate &&
        <Grid item container xs={12} justify="space-between">
          <Box mt={1.5}>
            <Typography>
              <Box borderRadius="5%" component="span">
                <img src="https://micron-web.herokuapp.com/images/micron.png" width="30px" className={classes.profilepic}/>
              </Box>
              {message.author} {" "}
              <Typography variant="caption" color="textSecondary"> {showDate && formatDate(message.created_at)}</Typography>
            </Typography>
          </Box>
        </Grid>
      }
      
      <Grid item xs={12}>
        <Typography variant="body2">
          {checkURL(message.text) ? (
            <img width="100px" src={message.text} />
          ) : (
            <ReactTextFormat>{message.text}</ReactTextFormat>
          )}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Box>
          {
            Object.keys(emojiSet).map(key => {
              console.log(key)
              return <Button size="small" key={key} onClick={() => {
                createReaction(message.message_id, key)
              }}>
                <Badge badgeContent={emojiSet[key]}>{key}</Badge>
              </Button>;
            })
          }
        </Box>
      </Grid>
      <Grid item xs={12} className={classes.overlay}>
        <EmojiPicker onSelect = {handleReaction}></EmojiPicker>
      </Grid>
    </Grid>
  );
}

export default Message;

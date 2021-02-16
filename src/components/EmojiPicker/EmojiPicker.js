import React, { useState } from "react";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";
import { IconButton, Menu } from "@material-ui/core";
import MoodIcon from "@material-ui/icons/Mood";

function EmojiPicker({ onSelect }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleOpen(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <>
      <IconButton onClick={handleOpen}>
        <MoodIcon />
      </IconButton>
      <Menu
        onClose={handleClose}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
      >
        <Picker onSelect={onSelect} />
      </Menu>
    </>
  );
}

export default EmojiPicker;

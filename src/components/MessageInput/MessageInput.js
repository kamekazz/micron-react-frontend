import React, { useState } from "react";
import { Grid, TextField } from "@material-ui/core";
import EmojiPicker from "../EmojiPicker/EmojiPicker";

export default function MessageInput({ handleSendMessage }) {
  const [userInput, setUserInput] = useState("");

  function handleSend() {
    setUserInput("");
    handleSendMessage(userInput);
  }

  function handleUserInput(e) {
    setUserInput(e.target.value);
  }

  function handleUserKeyDown(e) {
    if (e.key === "Enter") {
      handleSend();
    }
  }

  function handlePick(e) {
    setUserInput(userInput + e.native);
  }

  return (
    <Grid item xs={12} container>
      <Grid item xs={11}>
        <TextField
          fullWidth
          autoFocus
          value={userInput}
          onChange={handleUserInput}
          onKeyDown={handleUserKeyDown}
        ></TextField>
      </Grid>
      <Grid item xs={1}>
        <EmojiPicker onSelect={handlePick} />
      </Grid>
    </Grid>
  );
}

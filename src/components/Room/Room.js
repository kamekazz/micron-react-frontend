import React, { useState, useEffect } from "react";
import { useRooms } from ".././../hooks";
import { TextField, Typography, Grid, makeStyles } from "@material-ui/core";
import RoomList from "../RoomList/RoomList";
import UserList from "../UserList/UserList";
import Message from "../Message/Message";

import EmojiPicker from "../EmojiPicker/EmojiPicker";

const useStyles = makeStyles((theme) => ({
  messages: {
    height: "300px",
    overflowY: "scroll",
  },
  bottom: {
    height: "20px",
  },
  root: {
    height: "100vh",
    width: "100vw",
  },
}));

function Room() {
  const { getRoomMessages, sendMessage, getRoom } = useRooms();
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [roomName, setRoomName] = useState("");

  const classes = useStyles();

  useEffect(() => {
    loadMessages();

    getRoom().then((res) => {
      setRoomName(res.data.name);
    });

    const interval = setInterval(() => {
      loadMessages();
    }, 1000);

    return function () {
      clearInterval(interval);
    };
  }, []);

  function loadMessages() {
    getRoomMessages()
      .then((res) => {
        setMessages(res.data.results.reverse());
      })
      .catch((err) => {
        throw err;
      });
  }

  function handleSendMessage() {
    const tempUserInput = userInput;
    if (tempUserInput.trim() == "") return;
    setUserInput("");
    sendMessage(tempUserInput)
      .then(() => {
        scrollToChatEdge();
        loadMessages();
      })
      .catch((err) => {
        alert(err);
      });
  }

  function scrollToChatEdge() {
    document.querySelector("#messages-bottom").scrollIntoView();
  }

  function handleUserInput(e) {
    setUserInput(e.target.value);
  }

  function handleUserKeyDown(e) {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  }

  function handlePick(e) {
    console.log(e.native);
    setUserInput(userInput + e.native);
  }

  return (
    <Grid container>
      <Grid item xs={12} sm={4} lg={3}>
        <RoomList />
      </Grid>

      <Grid container item xs={12} sm={6} lg={7}>
        <Grid item xs={12}>
          <Typography variant="h4">{roomName}</Typography>
        </Grid>

        <Grid id="messages" item xs={12} className={classes.messages}>
          {messages.map((message, i) => {
            return (
              <Message
                key={message.created_at}
                message={message}
                showDate={
                  !messages[i - 1] ||
                  messages.length === i + 1 ||
                  message.author !== messages[i - 1].author
                }
              />
            );
          })}
          <div id="messages-bottom" className={classes.bottom}></div>
        </Grid>

        <Grid item xs={12} className={classes.input} container>
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
      </Grid>

      <Grid item xs={12} sm={2}>
        <UserList />
      </Grid>
    </Grid>
  );
}

export default Room;

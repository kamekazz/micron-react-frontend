import React, { useState, useEffect } from "react";
import { useRooms } from ".././../hooks";
import { TextField, Typography, Grid, makeStyles } from "@material-ui/core";
import RoomList from "../RoomList/RoomList";
import UserList from "../UserList/UserList";
import Message from "../Message/Message";

const useStyles = makeStyles((theme) => ({
  input: {
    // background: "red",
    background: theme.palette.grey[100]
  },
  messages: {
    height: "300px",
    overflowY: "scroll",
    background: "white"
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

    getRoom().then(res => {
      setRoomName(res.data.name)
    })

    const interval = setInterval(() => {
      loadMessages();
    }, 600)

    return function () {
      clearInterval(interval)
    }

  }, []);

  function loadMessages() {
    getRoomMessages()
      .then((res) => {
        setMessages(res.data.results.reverse());
        scrollToChatEdge();
      })
      .catch((err) => {
        throw err;
      });
  }

  function handleSendMessage() {
    const tempUserInput = userInput;
    if (tempUserInput.trim() == "") return;
    setUserInput("");
    sendMessage(tempUserInput).then(() => {
      scrollToChatEdge();
      loadMessages();
    }).catch(err => {
      alert(err)
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

  return (
    <Grid container>
      <Grid item xs={4}>
        <RoomList />
      </Grid>

      <Grid container item xs={6}>
        <Grid item xs={12}>
          <Typography>{roomName}</Typography>
        </Grid>

        <Grid id="messages" item xs={12} className={classes.messages}>
          {messages.map((message) => {
            return <Message message={message} />
          })}
          <div id="messages-bottom" className={classes.bottom}></div>
        </Grid>


        <Grid item xs={12} className={classes.input}>
          <TextField
            fullWidth
            value={userInput}
            onChange={handleUserInput}
            onKeyDown={handleUserKeyDown}
          ></TextField>
        </Grid>
      </Grid>

      <Grid item xs={2}>
        <UserList />
      </Grid>
    </Grid>
  );
}

export default Room;

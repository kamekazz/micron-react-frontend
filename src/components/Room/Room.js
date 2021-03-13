import React, { useEffect } from "react";
import { useRooms } from ".././../hooks";
import { makeStyles } from "@material-ui/core";
// import RoomList from "../RoomList/RoomList";
// import UserList from "../UserList/UserList";
import Message from "../Message/Message";
import MessageInput from "../MessageInput/MessageInput";
import { useDispatch, useSelector } from "react-redux";
//import useWindowDimensions from "../../hooks";
//const { height, width } = useWindowDimensions();
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(() => ({
  root: {
    display: "grid",
    height: "calc(100vh - 5em)",
    gridTemplateColumns: "fr1",
    gridTemplateRows: "auto 50px",
    gridTemplateAreas: `"messagesContainer" 
                          "MessageInput"`,
  },
  messagesContainer: {
    gridArea: "messagesContainer",
  },
}));

function Room() {
  const { getRoomMessages, sendMessage, getRoom } = useRooms();

  const messages = useSelector((state) => state.messagesReducer.messages);

  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    loadMessages();

    getRoom().then((res) => {
      dispatch({ type: "CHANGE_ROOM_NAME", payload: res.data.name });
    });

    const interval = setInterval(() => {
      loadMessages();
    }, 1000);

    return function () {
      clearInterval(interval);
      dispatch({ type: "CLEAR_MESSAGES" });
    };
  }, []);

  function loadMessages() {
    getRoomMessages()
      .then((res) => {
        dispatch({ type: "LOAD_MESSAGES", payload: res.data.results.reverse() });
      })
      .catch((err) => {
        throw err;
      });
  }

  function handleSendMessage(userInput) {
    const tempUserInput = userInput;
    if (tempUserInput.trim() == "") return;

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

  return (
    <Container className={classes.root}>
      <div className={classes.messagesContainer}>
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
      </div>
      <MessageInput handleSendMessage={handleSendMessage} />
    </Container>
  );
}

export default Room;
{
  /* <UserList /> */
}
{
  /* <RoomList /> */
}

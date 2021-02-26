import axios from "axios";
import { useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

export default function useRooms() {
  const { room_id } = useParams();
  //const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();

  function getRooms() {
    return axios.get("rooms/");
  }

  function getRoom() {
    return axios.get("rooms/" + room_id + "/");
  }

  function getRoomMessages() {
    return axios.get("messages/?room=" + room_id);
  }

  function createReaction(message_id, text) {
    return axios(`messages/${message_id}/reaction/create`, {
      method: "post",
      data: {
        text: text,
      },
    }).then(() => {
      console.log("reaction created");
    });
  }

  function createRoom(roomName) {
    return axios("rooms/", {
      method: "post",
      data: {
        name: roomName,
      },
    })
      .then(() => {
        enqueueSnackbar("room created", { variant: "success" });
        //history.push("/");
      })
      .catch(() => {
        enqueueSnackbar("room not created", { variant: "error" });
      });
  }

  function sendMessage(text) {
    const postBody = { text: text };

    return axios("rooms/" + room_id + "/send", {
      data: postBody,
      method: "POST",
    });
  }

  return {
    getRooms,
    getRoom,
    getRoomMessages,
    sendMessage,
    createRoom,
    createReaction,
  };
}

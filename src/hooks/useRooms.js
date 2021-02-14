import axios from "axios";
import { useParams, useHistory } from "react-router-dom";

export default function useRooms() {
  const { room_id } = useParams();
  const history = useHistory();

  function getRooms() {
    return axios.get("rooms/");
  }

  function getRoomMessages() {
    return axios.get("messages/?room=" + room_id);
  }

  function createRoom(roomName){
    return axios("rooms/",{
      method: "post",
      data: {
        name: roomName
      }
    }).then(()=>{
      history.push("/")
    })
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
    getRoomMessages,
    sendMessage,
    createRoom,
  };
}

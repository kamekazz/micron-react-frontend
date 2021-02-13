import axios from "axios";
import { useParams } from "react-router-dom";

export default function useRooms() {
  const { room_id } = useParams();

  function getRooms() {
    return axios.get("rooms/");
  }

  function getRoomMessages() {
    return axios.get("messages/?room=" + room_id);
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
  };
}

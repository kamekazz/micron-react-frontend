/* eslint-disable indent */
const initialState = {
  messages: [],
  roomName: "Micron",
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "LOAD_MESSAGES":
      return {
        ...state,
        messages: payload,
      };
    case "CLEAR_MESSAGES":
      return {
        ...state,
        messages: [],
      };
    case "CHANGE_ROOM":
      return {
        ...state,
        messages: payload,
      };
    case "CHANGE_ROOM_NAME":
      return {
        ...state,
        roomName: payload,
      };
    default:
      return state;
  }
}

/* eslint-disable indent */
const initialState = {
  messages: [],
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
    case "CHANCE_ROOM":
      return {
        ...state,
        messages: payload,
      };
    case "SET_URL":
      return {
        ...state,
        url: payload,
      };
    default:
      return state;
  }
}

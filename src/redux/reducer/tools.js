/* eslint-disable indent */
// const LOADING_PAGE_ACTION = "LOADING_PAGE_ACTION";
// const ADD_SERVICE = "ADD_SERVICE";
// const SET_SECTION = "SET_SECTION";
// const SET_URL = "SET_URL";

const initialState = {
  loading: true,
  serviceInput: "",
  section: "",
  url: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "LOADING_PAGE_ACTION":
      return {
        ...state,
        loading: payload,
      };
    case "ADD_SERVICE":
      return {
        ...state,
        serviceInput: payload,
      };
    case "SET_SECTION":
      return {
        ...state,
        section: payload,
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

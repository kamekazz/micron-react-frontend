import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import tools from "./reducer/tools";
import messagesReducer from "./reducer/messages-reducer";
import thunk from "redux-thunk";
const rootReducer = combineReducers({
  tools,
  messagesReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

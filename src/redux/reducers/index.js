import { combineReducers } from "redux";
import userReducer from "./userReducer";
import itemsReducer from "./itemsReducer";
import uiReducer from "./uiReducer";

export default combineReducers({
  user: userReducer,
  items: itemsReducer,
  ui: uiReducer,
});

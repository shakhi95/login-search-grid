//
import { LOG_IN, LOG_OUT } from "../types";

const INITIAL_STATE = { isLogedIn: false, fullname: "" };

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOG_IN:
      return { ...state, isLogedIn: true, fullname: action.payload };

    case LOG_OUT:
      return { ...state, isLogedIn: false, fullname: "" };

    default:
      return state;
  }
};

export default userReducer;

//
import { SET_MODAL } from "../types";

const INITIAL_STATE = { modal: { isShown: false, body: null } };

const uiReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_MODAL:
      return { ...state, modal: action.payload };

    default:
      return state;
  }
};

export default uiReducer;

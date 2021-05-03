//
import {
  LOG_IN,
  LOG_OUT,
  SET_PAGE_NUM,
  FILTER_ITEMS,
  SET_MODAL,
  EDIT_ITEM,
} from "../types";

export const login = (fullname) => {
  return { type: LOG_IN, payload: fullname };
};

export const logout = () => {
  return { type: LOG_OUT };
};

export const setPageNum = (pageNum) => {
  return { type: SET_PAGE_NUM, payload: pageNum };
};

export const filterItems = (searchValues) => {
  return { type: FILTER_ITEMS, payload: searchValues };
};

export const setModal = (isShown = false, body = null) => {
  return { type: SET_MODAL, payload: { isShown, body } };
};

export const editItem = (editedItem) => {
  //
  return { type: EDIT_ITEM, payload: editedItem };
};

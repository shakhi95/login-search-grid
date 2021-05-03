//
import { SET_PAGE_NUM, FILTER_ITEMS, EDIT_ITEM } from "../types";
import mockData from "../../utils/data";

const INITIAL_STATE = {
  allItems: mockData,
  filteredItems: mockData,
  pageNumber: 1,
};

const itemsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_PAGE_NUM:
      return { ...state, pageNumber: action.payload };

    case FILTER_ITEMS:
      const { searchTerm: term, year, type } = action.payload;
      let tempResult = state.allItems;
      if (term) {
        tempResult = tempResult.filter((item) =>
          item.Title.toLocaleLowerCase().includes(term.toLocaleLowerCase())
        );
      }
      if (year) {
        tempResult = tempResult.filter((item) => item.Year.includes(year));
      }
      if (type !== "all") {
        tempResult = tempResult.filter((item) => item.Type === type);
      }
      return { ...state, filteredItems: tempResult, pageNumber: 1 };

    case EDIT_ITEM:
      const { itemTitle, itemYear, itemType, imdbId } = action.payload;
      const newAllItems = state.allItems.map((item) => {
        if (item.imdbID === imdbId) {
          return {
            imdbID: imdbId,
            Title: itemTitle,
            Year: itemYear,
            Type: itemType,
          };
        } else {
          return item;
        }
      });
      const newFilteredItems = state.filteredItems.map((item) => {
        if (item.imdbID === imdbId) {
          return {
            imdbID: imdbId,
            Title: itemTitle,
            Year: itemYear,
            Type: itemType,
          };
        } else {
          return item;
        }
      });
      return {
        ...state,
        allItems: newAllItems,
        filteredItems: newFilteredItems,
      };

    default:
      return state;
  }
};

export default itemsReducer;

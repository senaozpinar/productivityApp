import _ from "lodash";
import {
  CREATE_TODO,
  FETCH_TODOS,
  FETCH_TODO,
  DELETE_TODO,
  EDIT_TODO,
  TOGGLE_TODO,
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_TODOS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case FETCH_TODO:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_TODO:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_TODO:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_TODO:
      return _.omit(state, action.payload);
    case TOGGLE_TODO:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};

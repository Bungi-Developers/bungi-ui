import { reduceState } from "./utils";
import { SET_EDITING } from "../action-types/app";

const initialState = {
  editing: false,
};

const handlers = {
  [SET_EDITING]: (state, action) => ({
    editing: action.editing,
  }),

};

export default reduceState(initialState, handlers);
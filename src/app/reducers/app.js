import { reduceState } from "./utils";
import { SET_EDITING, SET_NAVIGATION } from "../action-types/app";

const initialState = {
  editing: false,
  navigation: {},
};

const handlers = {
  [SET_EDITING]: (state, action) => ({
    editing: action.editing,
  }),
  [SET_NAVIGATION]: (state, action) => ({
    navigation: action.navigation,
  }),
};

export default reduceState(initialState, handlers);
import { reduceState } from "./utils";
import { LOAD_DATA } from "../action-types/app";

const initialState = {
  data: {}
};

const handlers = {
  [LOAD_DATA]: (state, action) => ({
    data: action.data,
  }),

};

export default reduceState(initialState, handlers);
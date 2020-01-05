import { LOAD_DATA } from "../action-types/app";

export const loadData = data => ({
  type: LOAD_DATA,
  data
});
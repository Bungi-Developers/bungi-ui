import { SET_EDITING, SET_NAVIGATION } from "../action-types/app";

export const setEditing = editing => ({
  type: SET_EDITING,
  editing
});
export const setNavigation = navigation => ({
  type: SET_NAVIGATION,
  navigation
});
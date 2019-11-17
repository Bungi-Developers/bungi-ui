import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";

import routes from "./routes";

const tabConfig = {};

const Navigator = createBottomTabNavigator(routes, tabConfig);
export default createAppContainer(Navigator);

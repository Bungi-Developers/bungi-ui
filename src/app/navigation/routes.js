import React from "react";
import {
  FontAwesome,
  MaterialCommunityIcons,
  Entypo
} from "@expo/vector-icons";
import { createStackNavigator } from 'react-navigation-stack';
import { Discover, Chat, User } from "../screens";

import { EditProfileItem } from "../templates";

export const routeConfig = {
  Discover: {
    screen: Discover,
    navigationOptions: {
      tabBarIcon: ({ focused }) => (
        <MaterialCommunityIcons
          color={focused ? "blue" : "black"}
          size={20}
          name="telescope"
        />
      )
    }
  },
  Chat: {
    screen: Chat,
    navigationOptions: {
      tabBarIcon: ({ focused }) => (
        <Entypo color={focused ? "blue" : "black"} size={20} name="chat" />
      )
    }
  },
  User: {
    screen: createStackNavigator({
      user: { screen: User },
      edit: { screen: EditProfileItem }
    }, { headerMode: 'none' }),
    navigationOptions: {
      tabBarIcon: ({ focused }) => (
        <FontAwesome color={focused ? "blue" : "black"} size={20} name="user" />
      )
    },
  }
};

export default routeConfig;

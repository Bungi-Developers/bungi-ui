import React from 'react';
import { FontAwesome, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import { Discover, Chat, User } from "../screens";

export const routeConfig = {
  Discover: {
    screen: Discover,
    navigationOptions: {
      tabBarIcon: ({ focused }) => (
        <MaterialCommunityIcons
          color={focused ? 'blue' : 'black'}
          size={20}
          name="telescope"
        />
      ),
    }
  },
  Chat: {
    screen: Chat,
    navigationOptions: {
      tabBarIcon: ({ focused }) => (
        <Entypo
          color={focused ? 'blue' : 'black'}
          size={20}
          name="chat"
        />
      ),
    }
  },
  User: {
    screen: User,
    navigationOptions: {
      tabBarIcon: ({ focused }) => (
        <FontAwesome
          color={focused ? 'blue' : 'black'}
          size={20}
          name="user"
        />
      ),
    }
  }
};

export default routeConfig;

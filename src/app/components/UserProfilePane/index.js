import React from "react";
import uuid from "lodash/uniqueId";
import {
  MaterialIcons,
  FontAwesome,
  MaterialCommunityIcons,
  Ionicons,
  Entypo
} from "@expo/vector-icons";
import { FlatList } from "react-native";
import ContentBox from "../ContentBox";
import UserProfileItem from './UserProfileItem';

// TODO: offload to backend resolver or selector
const convertInchesToString = (heightInches) => {
  const inchesPerFoot = 12;
  const feet = Math.floor(heightInches / inchesPerFoot);
  const inches = heightInches % inchesPerFoot;
  return `${feet}'${inches ? ` ${inches}"` : ''}`;
};

const UserProfilePane = ({
  age,
  sex,
  heightInches,
  location,
  job,
  education,
  religion,
  politicalIdeology,
  hometown,
  styles
}) => (
  <ContentBox border={true}>
    <FlatList
      renderItem={({ item }) => <UserProfileItem {...item} />}
      keyExtractor={item => item.id}
      data={[
        {
          id: uuid(),
          Icon: () => <MaterialIcons size={32} name="cake" />,
          content: age
        },
        {
          id: uuid(),
          Icon: () => <FontAwesome size={32} name="intersex" />,
          content: sex
        },
        {
          id: uuid(),
          Icon: () => <Entypo size={32} name="ruler" />,
          content: convertInchesToString(heightInches)
        },
        {
          id: uuid(),
          Icon: () => <MaterialCommunityIcons size={32} name="map-marker" />,
          content: location
        },
        {
          id: uuid(),
          Icon: () => <Ionicons size={32} name="ios-briefcase" />,
          content: job
        },
        {
          id: uuid(),
          Icon: () => <Entypo size={32} name="graduation-cap" />,
          content: education
        },
        {
          id: uuid(),
          Icon: () => <MaterialIcons size={32} name="account-balance" />,
          content: politicalIdeology
        },
        {
          id: uuid(),
          Icon: () => <Entypo size={32} name="book" />,
          content: religion
        },
        {
          id: uuid(),
          Icon: () => <Entypo size={32} name="home" />,
          content: hometown,
          last: true
        }
      ]}
    />
  </ContentBox>
);

export default UserProfilePane;

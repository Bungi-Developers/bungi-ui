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
import { ContentBox } from "../../../components";
import InfoPaneItem from "./InfoPaneItem";

const InfoPane = ({
  age,
  sex,
  height,
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
      renderItem={({ item }) => <InfoPaneItem {...item} />}
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
          content: height
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

export default InfoPane;

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
  hometown
}) => (
  <ContentBox border={true}>
    <FlatList
      scrollEnabled={false}
      renderItem={({ item }) => <InfoPaneItem {...item} />}
      keyExtractor={item => item.id}
      data={[
        {
          id: uuid(),
          Icon: props => <MaterialIcons name="cake" {...props} />,
          content: age
        },
        {
          id: uuid(),
          Icon: props => <FontAwesome name="intersex" {...props} />,
          content: sex
        },
        {
          id: uuid(),
          Icon: props => <Entypo name="ruler" {...props} />,
          content: height
        },
        {
          id: uuid(),
          Icon: props => (
            <MaterialCommunityIcons name="map-marker" {...props} />
          ),
          content: location
        },
        {
          id: uuid(),
          Icon: props => <Ionicons name="ios-briefcase" {...props} />,
          content: job
        },
        {
          id: uuid(),
          Icon: props => <Entypo name="graduation-cap" {...props} />,
          content: education
        },
        {
          id: uuid(),
          Icon: props => <MaterialIcons name="account-balance" {...props} />,
          content: politicalIdeology
        },
        {
          id: uuid(),
          Icon: props => <Entypo name="book" {...props} />,
          content: religion
        },
        {
          id: uuid(),
          Icon: props => <Entypo name="home" {...props} />,
          content: hometown,
          last: true
        }
      ]}
    />
  </ContentBox>
);

export default InfoPane;

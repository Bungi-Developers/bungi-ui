import React from "react";
import { compose } from "redux";
import uuid from "lodash/uniqueId";
import {
  MaterialIcons,
  FontAwesome,
  MaterialCommunityIcons,
  Ionicons,
  Entypo
} from "@expo/vector-icons";
import { Text, View, FlatList } from "react-native";
import { withStyles } from "../../HOCs";
import ContentBox from "../ContentBox";

const Item = ({ content, last, Icon }) => (
  <View
    style={{
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      borderBottom: 10,
      paddingVertical: 12,
      paddingHorizontal: 12,
      justifyContent: "flex-start",
      flex: 1,
      borderBottomColor: "black",
      borderBottomWidth: last ? 0 : 1
    }}
  >
    <View style={{ marginRight: 12 }}>
      <Icon />
    </View>
    <Text style={{ fontSize: 24 }}>{content}</Text>
  </View>
);

const UserPane = ({
  age,
  sex,
  height,
  location,
  job,
  education,
  religion,
  ideaology,
  hometown,
  styles
}) => (
  <ContentBox>
    <View style={{ padding: 12 }}>
      <FlatList
        renderItem={({ item }) => <Item {...item} />}
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
            content: ideaology
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
    </View>
  </ContentBox>
);

export default compose(
  withStyles({
    background: {
      width: "100%",
      height: 400,
      borderRadius: 10,
      overflow: "hidden"
    }
  })
)(UserPane);

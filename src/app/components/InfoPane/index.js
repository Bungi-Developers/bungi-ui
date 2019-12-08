import React from "react";
import { compose } from "redux";
import { Text, View, ImageBackground } from "react-native";
import { withStyles } from "../../HOCs";
import ContentBox from "../ContentBox";

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
}) => {
  return <ContentBox>// TODO: use SectionList here</ContentBox>;
};

export default compose(
  withStyles({
    background: {
      width: "100%",
      height: 400,
      borderRadius: 10,
      overflow: "hidden"
    },
    head: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginLeft: 40,
      marginRight: 40
    },
    name: {
      fontSize: 28
    },
    rating: {
      fontSize: 16
    }
  })
)(UserPane);

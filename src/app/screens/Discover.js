import React from "react";
import { View } from "react-native";
import { compose } from "redux";
import { withSafeScroll, withStyles } from "../HOCs";
import UserPane from "../components/UserPane";
import Header from "../components/Header";
import InfoPane from "../components/InfoPane";

export const Discover = () => (
  <View style={{ flex: 1 }}>
    <UserPane
      name="Annie"
      rating={7.1}
      url="http://www.infodirect.co.za/wp-content/uploads/2016/03/hot-girl-making-selfie.png"
    />
    <InfoPane
      age="22"
      sex="Female"
      height={"5'2\""}
      location="Fort Collins"
      job="Waitress"
      education="Colorado College"
      religion="Agnostic"
      ideaology="Democrat"
      hometown="Greely"
    />
  </View>
);

export default compose(withSafeScroll)(Discover);

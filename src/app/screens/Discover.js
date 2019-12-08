import React from "react";
import { View } from "react-native";
import { compose } from "redux";
import { withSafeScroll, withStyles } from "../HOCs";
import UserPane from "../components/UserPane";
import Header from "../components/Header";

export const Discover = () => (
  <View style={{ flex: 1 }}>
  <Header />
  <UserPane
    name='Annie'
    rating={7.1}
    url='http://www.infodirect.co.za/wp-content/uploads/2016/03/hot-girl-making-selfie.png'
  />
  </View>
);

export default compose(
  withSafeScroll,
)(Discover);

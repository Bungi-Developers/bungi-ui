import React from "react";
import { compose } from "redux";
import { withSafeScroll, withStyles } from "../HOCs";
import UserPane from "../components/UserPane";

export const Discover = () => (
  <UserPane
    name='Annie'
    rating={7.1}
    url='http://www.infodirect.co.za/wp-content/uploads/2016/03/hot-girl-making-selfie.png'
  />
);

export default compose(
  withStyles({
    text: {
      fontSize: 24
    }
  }),
  withSafeScroll,
)(Discover);

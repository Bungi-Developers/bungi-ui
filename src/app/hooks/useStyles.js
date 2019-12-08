import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import reduce from "lodash/reduce";

const flatten = props => (result, value, key) => {
  if (typeof value === "object") {
    result[key] = reduce(value, flatten(props), {});
  } else if (typeof value === "function") {
    result[key] = value(props);
  } else {
    result[key] = value;
  }
  return result;
};

const renderWithProps = (styles, props) => reduce(styles, flatten(props), {});

/**
 * withStyles takes a style object, creates React Native StyleSheet, and
 * passes it into the component via the style state. Values that need
 * props can use a function with the props passed in.
 * For example in your styles object: backgroundColor: props => props.color
 * @param styles
 * @param props
 * @returns {function(*): function(*): *}
 */
const useStyles = (styles, props) => {
  const [s, setStyle] = useState({});

  console.log("styles", styles);
  console.log("props", props);

  useEffect(() => {
    const r = renderWithProps(styles, props);
    console.log("r", r);

    const styleSheet = StyleSheet.create(r);
    setStyle(styleSheet);
  });

  return s;
};

export default useStyles;

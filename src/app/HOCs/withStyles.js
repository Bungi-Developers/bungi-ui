import React from "react";
import { StyleSheet } from "react-native";
import reduce from 'lodash/reduce';

const flatten = (props) => (result, value, key) => {
  if (typeof value === 'object') {
    result[key] = reduce(value, flatten(props), {});
  } else if (typeof value === 'function') {
    result[key] = value(props);
  } else {
    result[key] = value;
  }
  return result;
};

const renderWithProps = (styles, props) => reduce(styles, flatten(props), {});

/**
 * withStyles takes a style object, creates React Native StyleSheet, and
 * passes it into the wrapped component as the styles prop. Values that need
 * props can use a function with the props passed in.
 * For example in your styles object: backgroundColor: props => props.color
 * @param styles
 * @returns {function(*): function(*): *}
 */
export default withStyles = styles => Component => {
  return props => {
    const r = renderWithProps(styles, props);
    const styleSheet = StyleSheet.create(r);
    return <Component {...props} styles={styleSheet} />;
  };
};

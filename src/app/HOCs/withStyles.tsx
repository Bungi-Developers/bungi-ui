import React from "react";
import { StyleSheet } from "react-native";
import NamedStyles = StyleSheet.NamedStyles;

interface WithStylesProps {
  styles: object
}

/**
 * withStyles takes a style object, creates React Native StyleSheet, and
 * passes it into the wrapped component as the styles prop
 * @param styles
 * @returns {function(*): function(*): *}
 */
export const withStyles = (styles: object) =>
  <P extends object>(Component: React.ComponentType<P & WithStylesProps>) => {
    const styleSheet = StyleSheet.create<NamedStyles<object>>(styles);
    return (props: object) => {
      return <Component {...props as P} styles={styleSheet} />;
    };
  };

export default withStyles;

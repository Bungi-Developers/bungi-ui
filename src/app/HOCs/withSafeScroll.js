import React from "react";
import { ScrollView, SafeAreaView, StyleSheet } from "react-native";

/**
 * withSafeScroll wraps a component with the SafeAreaView and
 * ScrollView components
 * @param Component
 * @returns {function(*): *}
 */
export default withSafeScroll = Component => {
  const styles = StyleSheet.create({
    container: {
      flex: 1
    }
  });
  return props => (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Component {...props} />
      </ScrollView>
    </SafeAreaView>
  );
};

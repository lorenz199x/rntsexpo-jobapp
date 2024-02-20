import React from "react";
import { StyleSheet, View } from "react-native";
import Container from "@components/Containers/Container";
import AppIcon from "@components/Icon/AppIcon";

import Tab from "./components/Tab";

/**
 * The screen for authenticating the user to the app.
 *
 * @type {Component}
 * @returns {React.Fc}
 */
const Authentication = () => {
  return (
    <Container>
      <View style={styles.iconContainer}>
        <AppIcon containerSize={80} />
      </View>
      <Tab />
    </Container>
  );
};

export default Authentication;

const styles = StyleSheet.create({
  iconContainer: {
    alignSelf: "center",
    marginTop: 30,
  },
});

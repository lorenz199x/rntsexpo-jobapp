import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";

interface HeaderProps {
  title: string;
  onButtonPress: () => void;
}

const Header = (props: HeaderProps) => {
  const { title, onButtonPress } = props;
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={onButtonPress} style={styles.button}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
    backgroundColor: "#7986F9",
    marginTop: Platform.OS === "android" ? 50 : 0,
  },
  title: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  button: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#7986F9",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default Header;

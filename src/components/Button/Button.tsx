import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Text from "@components/Text/Text";
import { Colors } from "@themes/index";

interface ButtonProps {
  title: string;
  titleSize: "xs" | "s" | "m" | "l" | "xl";
  onPress: () => void;
  buttonStyle?: object;
}

const Button = (props: ButtonProps) => {
  const { title, titleSize, onPress, buttonStyle } = props;
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, buttonStyle]}>
      <Text size={titleSize} style={styles.textColor}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#ad5cf9",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 5,
    borderRadius: 15,
  },
  textColor: {
    color: Colors.white_text_color,
  },
});

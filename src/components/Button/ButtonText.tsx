import React, { FC } from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";
import { ButtonTitle } from "@shared/enums/buttonText";
import { Colors } from "@themes/index";

interface ButtonTextProps {
  /**
   * The text for the button.
   */
  buttonText?: string;

  /**
   * A custom style for the button container.
   */
  customButtonStyle?: StyleProp<ViewStyle>;

  /**
   * A custom style for the button text.
   */
  customTextStyle?: StyleProp<TextStyle>;

  /**
   * Will only show the text.
   */
  textOnly?: boolean;
}

/**
 * A component responsible for showing a button with a text.
 *
 * @type {Function}
 * @returns {React.FC}
 */
const ButtonText: FC<ButtonTextProps & TouchableOpacityProps> = ({
  onPress,
  customButtonStyle,
  customTextStyle,
  buttonText = ButtonTitle.OK,
  textOnly = false,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[!textOnly && styles.buttonContainer, customButtonStyle]}
    >
      <Text style={[!textOnly && styles.buttonText, customTextStyle]}>
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonText;

const styles = StyleSheet.create({
  buttonContainer: {
    paddingVertical: 15,
    backgroundColor: Colors.violet,
    borderRadius: 40,
    alignItems: "center",
  },
  buttonText: {
    color: Colors.white_text_color,
    fontWeight: "bold",
  },
});

import React, { FC, ReactNode } from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";
import Icon, { IconTypes } from "@components/Icon/Icon";
import Spacing from "@components/Spacing/Spacing";
import { ButtonTitle } from "@shared/enums/buttonText";
import { Colors } from "@themes/index";
import { horizontalScale } from "@utils/sizes";

interface ButtonIconProps extends TouchableOpacityProps {
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
   * Custom text component.
   */
  customTextComponent?: ReactNode;

  /**
   * Custom icon component.
   */
  customIconComponent?: ReactNode;

  /**
   * This is responsible where is icon will show.
   */
  iconPosition?: "left" | "right";

  /**
   * This is the responsible for the margin between icon and text.
   */
  iconMargin?: number;

  /**
   * This is the responsible for the color of the icon.
   */
  iconColor?: string;

  /**
   * This is the responsible for the icon size.
   */
  iconSize?: number;

  /**
   * The type of the icon.
   */
  iconType?: IconTypes;

  /**
   * The name of the icon.
   */
  iconName?: string;

  /**
   * A boolean that will show the logo only if it's true.
   */
  logoOnly?: boolean;

  /**
   * A custom style for default icon.
   */
  customIconStyle?: StyleProp<ViewStyle>;
}

/**
 * A component responsible for showing a button with a text and icon.
 *
 * @type {Function}
 * @returns {React.FC}
 */
const ButtonIcon: FC<ButtonIconProps> = (props) => {
  const {
    customButtonStyle,
    customIconStyle,
    customTextStyle,
    buttonText = ButtonTitle.OK,
    customIconComponent,
    customTextComponent,
    iconPosition = "left",
    iconMargin = 10,
    iconColor = Colors.white,
    iconSize = 15,
    iconName = "alarm",
    iconType = "Material",
    logoOnly = false,
  } = props;
  return (
    <TouchableOpacity
      {...props}
      style={[
        styles.buttonContainer,
        iconPosition === "right" && styles.reverseButton,
        customButtonStyle,
      ]}
    >
      {!customIconComponent ? (
        <Icon
          iconStyle={customIconStyle}
          color={iconColor}
          size={iconSize}
          type={iconType}
          icon={iconName}
        />
      ) : (
        customIconComponent
      )}
      <Spacing horizontal space={horizontalScale(iconMargin)} />
      {!logoOnly &&
        (customTextComponent ? (
          customTextComponent
        ) : (
          <Text style={[styles.buttonText, customTextStyle]}>{buttonText}</Text>
        ))}
    </TouchableOpacity>
  );
};

export default ButtonIcon;

const styles = StyleSheet.create({
  buttonContainer: {
    paddingVertical: 15,
    backgroundColor: Colors.violet,
    borderRadius: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: Colors.white_text_color,
  },
  reverseButton: {
    flexDirection: "row-reverse",
  },
});

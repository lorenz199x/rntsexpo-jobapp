import React, { FC, ReactNode, useState } from "react";
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from "react-native";
import Icon, { IconTypes } from "@components/Icon/Icon";
import { Colors, Layouts } from "@themes/index";
import { screenHeight } from "@utils/sizes";

interface InputProps extends TextInputProps {
  /**
   * To show if input is default.
   */
  isDefault?: boolean;

  /**
   * Boolean for icon on the left side of the input.
   */
  customIconComponent?: ReactNode;

  /**
   * A checker if component wants to show the icon.
   */
  showIcon?: boolean;

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
   * Boolean for showing password icon.
   */
  showPasswordIcon?: boolean;

  /**
   * A custom input style.
   */
  customInputStyle?: StyleProp<ViewStyle>;

  /**
   * This is responsible where is icon will show.
   */
  iconPosition?: "left" | "right";

  onChange?: any;

  onBlur?: any;

  value?: any;

  editable?: any;
}

/**
 * A custom component for inputs.
 * It has a show password icon.
 *
 * @author {Harley}
 * @param props - InputProps & TextInputProps
 * @type {Component}
 * @returns {React.FC}
 */
const Input: FC<InputProps> = (props) => {
  const {
    customIconComponent,
    showIcon = true,
    showPasswordIcon,
    secureTextEntry,
    style,
    customInputStyle,
    isDefault = false,
    iconPosition = "left",
    iconMargin = 10,
    iconColor = Colors.black,
    iconSize = 15,
    iconName = "magnifier",
    iconType = "Simple",
    onChange,
    onBlur,
    value,
    editable = true,
  } = props;

  const [showPassword, setShowPassword] = useState(false);

  const iconStyle =
    iconPosition === "right"
      ? { marginLeft: iconMargin }
      : { marginRight: iconMargin };

  return (
    <View
      style={[
        !isDefault && styles.root,
        iconPosition === "right" && styles.rowReverse,
        style,
      ]}
    >
      {showIcon && (
        <View style={iconStyle}>
          {!customIconComponent ? (
            <Icon
              color={iconColor}
              size={iconSize}
              type={iconType}
              icon={iconName}
            />
          ) : (
            customIconComponent
          )}
        </View>
      )}
      <TextInput
        {...props}
        onChangeText={onChange}
        secureTextEntry={secureTextEntry && showPassword}
        style={[styles.input, customInputStyle]}
        editable={editable}
      />
      {showPasswordIcon && (
        <View style={styles.iconContainer}>
          <Icon
            size={25}
            onPress={() => setShowPassword((value) => !value)}
            type="MaterialCommunity"
            icon={!showPassword ? "eye" : "eye-off"}
            color="gray"
          />
        </View>
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  root: {
    color: "gray",
    backgroundColor: Colors.anti_flash_white_color,
    borderRadius: 10,
    height: screenHeight * 0.08,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
  },
  iconContainer: {
    paddingLeft: 15,
  },
  leftIconContainer: {
    ...Layouts.center,
    height: "100%",
    marginLeft: 0,
    marginRight: 10,
  },
  rowReverse: {
    flexDirection: "row-reverse",
  },
});

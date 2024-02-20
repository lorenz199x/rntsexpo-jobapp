import React, { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import ButtonIcon from "@components/Button/ButtonIcon";
import ButtonText from "@components/Button/ButtonText";
import Input from "@components/Input/Input";
import Text from "@components/Text/Text";
import { Labels } from "@shared/enums";
import { ButtonTitle } from "@shared/enums/buttonText";
import { Colors } from "@themes/index";
import { verticalScale } from "@utils/sizes";
import images from "@assets/images";

/**
 * A form dedicated for login.
 *
 * @author Harley
 * @type {Component}
 * @returns {React.FC}
 */
const LoginForm = () => {
  const [state, setState] = useState<{ username: string; password: string }>({
    username: "",
    password: "",
  });

  const onChangeText = (value: string, stateName: string) => {
    setState((prev) => ({
      ...prev,
      [stateName]: value,
    }));
  };

  const onPressLogin = () => {
    // Navigation.navigate(Screen.PIN_SCREEN);
  };

  return (
    <View style={styles.root}>
      <Input
        testID="input"
        placeholder={Labels.USERNAME}
        value={state.username}
        style={styles.inputs}
        onChangeText={(e) => onChangeText(e, "username")}
      />
      <Input
        testID="input"
        secureTextEntry
        value={state.password}
        placeholder={Labels.PASSWORD}
        style={[styles.inputs, styles.passwordInptu]}
        showPasswordIcon
        onChangeText={(e) => onChangeText(e, "password")}
      />
      <ButtonText
        textOnly
        buttonText={ButtonTitle.FORGOT_PASSWORD}
        customButtonStyle={styles.forgotPasswordButton}
        customTextStyle={styles.forgotPasswordButtonText}
      />
      <ButtonText
        customButtonStyle={styles.loginButton}
        buttonText={ButtonTitle.LOGIN}
        onPress={onPressLogin}
      />
      <Text size="s" style={styles.orText}>
        {Labels.OR}
      </Text>
      <ButtonIcon
        buttonText={ButtonTitle.LOGIN_FACEBOOK}
        iconType="Zocial"
        iconName="facebook"
        iconMargin={20}
        customButtonStyle={styles.facebookButton}
      />
      <ButtonIcon
        buttonText={ButtonTitle.LOGIN_GOOGLE}
        iconMargin={20}
        customIconComponent={
          <Image style={styles.googleLogo} source={images.googleLogo} />
        }
        customTextStyle={styles.googleText}
        customButtonStyle={styles.googleButton}
      />
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingTop: 30,
  },
  inputs: {
    marginBottom: 10,
    height: verticalScale(55),
  },
  passwordInptu: {
    marginBottom: 0,
  },
  forgotPasswordButton: {
    paddingVertical: 15,
  },
  forgotPasswordButtonText: {
    color: Colors.violet,
    fontWeight: "600",
  },
  loginButton: {
    marginBottom: 10,
  },
  orText: {
    alignSelf: "center",
    marginBottom: 10,
  },
  facebookButton: {
    backgroundColor: Colors.facebookBlue,
    marginBottom: 15,
  },
  googleButton: {
    backgroundColor: Colors.bright_gray_color,
  },
  googleLogo: {
    height: 20,
    width: 20,
    resizeMode: "contain",
  },
  googleText: {
    color: Colors.black,
  },
});

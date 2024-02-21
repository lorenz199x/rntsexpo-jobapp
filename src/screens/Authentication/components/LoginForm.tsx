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
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Navigation from "@navigation/Navigation";
import { Screen } from "@shared/enums/Screen";

interface LoginFormInput {
  username: string;
  password: string;
}

const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInput>({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<LoginFormInput> = (data) => {
    // You can handle the submission logic here
    console.log(data);
    Navigation.navigate(Screen.JOB_LIST);
  };

  return (
    <View style={styles.root}>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            testID="input"
            placeholder="Username"
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            style={styles.inputs}
            showIcon={false}
          />
        )}
        name="username"
        rules={{ required: "Username is required" }}
      />
      {errors.username && (
        <Text style={styles.error} size={"m"}>
          {errors.username.message}
        </Text>
      )}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            testID="input"
            placeholder="Password"
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            style={styles.inputs}
            showIcon={false}
            showPasswordIcon={true}
            secureTextEntry={true}
          />
        )}
        name="password"
        rules={{ required: "Password is required" }}
      />
      {errors.password && (
        <Text style={styles.error} size={"m"}>
          {errors.password.message}
        </Text>
      )}
      <ButtonText
        textOnly
        buttonText={ButtonTitle.FORGOT_PASSWORD}
        customButtonStyle={styles.forgotPasswordButton}
        customTextStyle={styles.forgotPasswordButtonText}
      />
      <ButtonText
        customButtonStyle={styles.loginButton}
        buttonText={ButtonTitle.LOGIN}
        onPress={handleSubmit(onSubmit)}
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
  error: {
    color: "red",
    marginBottom: 10,
  },
});

import React, { useEffect, useState } from "react";
import { Button, Image, Platform, StyleSheet, View } from "react-native";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Toast from "react-native-toast-message";
import { useSignIn } from "@clerk/clerk-expo";
import { ClerkProvider, SignedIn, SignedOut, useAuth } from "@clerk/clerk-expo";
//components
import ButtonIcon from "@components/Button/ButtonIcon";
import ButtonText from "@components/Button/ButtonText";
import Input from "@components/Input/Input";
import Text from "@components/Text/Text";
import { toastConfig, ToastMessage } from "@components/Toast/Toast";
//utils
import { ButtonTitle } from "@shared/enums/buttonText";
import { Colors } from "@themes/index";
import { verticalScale } from "@utils/sizes";
import Navigation from "@navigation/Navigation";
import { Screen } from "@shared/enums/Screen";

interface LoginFormInput {
  emailAddress: string;
  password: string;
}

const LoginForm = () => {
  const { signIn, setActive, isLoaded } = useSignIn();
  const { isSignedIn } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInput>({
    defaultValues: {
      emailAddress: "",
      password: "",
    },
  });

  useEffect(() => {
    if (isSignedIn) {
      Navigation.navigate(Screen.TAB_NAVIGATOR);
    }
  }, [isSignedIn]);

  const onSubmit: SubmitHandler<LoginFormInput> = async (data) => {
    // You can handle the submission logic here
    console.log("login", data);
    // Navigation.navigate(Screen.TAB_NAVIGATOR);

    if (!isLoaded) {
      return;
    }
    try {
      const completeSignIn = await signIn.create({
        identifier: data.emailAddress,
        password: data.password,
      });
      console.log("completeSignIn", completeSignIn);

      // This is an important step,
      // This indicates the user is signed in
      await setActive({ session: completeSignIn.createdSessionId });
    } catch (err: any) {
      console.log(err);

      Platform.OS === "ios"
        ? alert(err.errors[0].message)
        : ToastMessage.show({
            type: "error",
            message: err.errors[0].message,
            subMessage: "",
          });
    }
  };

  const SignOut = () => {
    const { isLoaded, signOut } = useAuth();
    if (!isLoaded) {
      return null;
    }
    return (
      // <View>
      //   <Button
      //     title="Sign Out"
      //     onPress={() => {
      //       signOut();
      //     }}
      //   />
      // </View>

      <ButtonIcon
        buttonText={ButtonTitle.LOGOUT}
        // iconMargin={20}
        // customIconComponent={
        //   <Image style={styles.googleLogo} source={images.googleLogo} />
        // }
        iconName=""
        customTextStyle={styles.googleText}
        customButtonStyle={styles.googleButton}
        onPress={() => signOut()}
      />
    );
  };

  return (
    <View style={styles.root}>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            testID="input"
            placeholder="Email Address"
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            style={styles.inputs}
            showIcon={false}
          />
        )}
        name="emailAddress"
        rules={{ required: "EmailAddress is required" }}
      />
      {errors.emailAddress && (
        <Text style={styles.error} size={"m"}>
          {errors.emailAddress.message}
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

      <SignOut />
      {/* <Text size="s" style={styles.orText}>
        {Labels.OR}
      </Text> */}
      {/* <ButtonIcon
        buttonText={ButtonTitle.LOGIN_FACEBOOK}
        iconType="Zocial"
        iconName="facebook"
        iconMargin={20}
        customButtonStyle={styles.facebookButton}
      /> */}
      {/* <ButtonIcon
        buttonText={ButtonTitle.LOGIN_GOOGLE}
        iconMargin={20}
        customIconComponent={
          <Image style={styles.googleLogo} source={images.googleLogo} />
        }
        customTextStyle={styles.googleText}
        customButtonStyle={styles.googleButton}
      /> */}
      <SignedIn>
        <Text style={styles.error} size={"m"}>
          You are Signed in
        </Text>
      </SignedIn>
      <SignedOut>
        <Text style={styles.error} size={"m"}>
          You are Signed out
        </Text>
      </SignedOut>

      <Toast config={toastConfig} position="bottom" bottomOffset={20} />
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

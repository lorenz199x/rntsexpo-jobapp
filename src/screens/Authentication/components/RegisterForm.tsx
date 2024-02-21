import React, { Fragment } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import images from "@assets/images";
import ButtonIcon from "@components/Button/ButtonIcon";
import ButtonText from "@components/Button/ButtonText";
import Input from "@components/Input/Input";
import { Labels } from "@shared/enums";
import { ButtonTitle } from "@shared/enums/buttonText";
import { Colors, Shadows } from "@themes/index";
import { verticalScale } from "@utils/sizes";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

interface RegisterFormInput {
  email: string;
  fullName: string;
  password: string;
  confirmPassword: string;
}

const RegisterForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInput>({
    defaultValues: {
      email: "",
      fullName: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit: SubmitHandler<RegisterFormInput> = (data) => {
    // You can handle the submission logic here
    console.log(data);
  };
  return (
    <View style={styles.root}>
      <View style={styles.firstRow}>
        <Text style={styles.registerText}>{Labels.REGISTER}</Text>
        <View style={styles.socialLoginButtonContainer}>
          <ButtonIcon
            logoOnly
            iconMargin={0}
            customButtonStyle={styles.socialLoginButton}
            customIconComponent={
              <Image style={styles.googleLogo} source={images.googleLogo} />
            }
          />
          <ButtonIcon
            logoOnly
            iconMargin={0}
            iconSize={20}
            customButtonStyle={styles.socialLoginButton}
            customIconStyle={styles.facebookIcon}
            iconType="Zocial"
            iconName="facebook"
            iconColor={Colors.facebookBlue}
          />
        </View>
      </View>
      <Fragment>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              testID="input"
              placeholder="Full Name"
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              style={styles.usernameInput}
              showIcon={false}
            />
          )}
          name="fullName"
          rules={{ required: "Full Name is required" }}
        />
        {errors.fullName && (
          <Text style={styles.error}>{errors.fullName.message}</Text>
        )}

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              testID="input"
              placeholder="Email"
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              style={styles.usernameInput}
              showIcon={false}
            />
          )}
          name="email"
          rules={{ required: "Username is required" }}
        />
        {errors.email && (
          <Text style={styles.error}>{errors.email.message}</Text>
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
              style={styles.usernameInput}
              showIcon={false}
              showPasswordIcon={true}
              secureTextEntry={true}
            />
          )}
          name="password"
          rules={{ required: "Password is required" }}
        />
        {errors.password && (
          <Text style={styles.error}>{errors.password.message}</Text>
        )}

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              testID="input"
              placeholder="Confirm Password"
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              style={styles.usernameInput}
              showIcon={false}
              showPasswordIcon={true}
              secureTextEntry={true}
            />
          )}
          name="confirmPassword"
          rules={{ required: "Confirm Password is required" }}
        />
        {errors.confirmPassword && (
          <Text style={styles.error}>{errors.confirmPassword.message}</Text>
        )}
      </Fragment>
      <View style={styles.secondRow}>
        <ButtonText
          buttonText={ButtonTitle.SIGN_UP}
          customButtonStyle={styles.signupButton}
          customTextStyle={styles.signupText}
          onPress={handleSubmit(onSubmit)}
        />
        <View style={styles.loginContainer}>
          <View>
            <Text style={styles.alreadyMemberText}>Already a member?</Text>
            <ButtonText
              customTextStyle={styles.loginText}
              textOnly
              buttonText={ButtonTitle.LOGIN}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default RegisterForm;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  firstRow: {
    alignItems: "center",
    marginTop: 30,
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  registerText: {
    fontSize: 30,
    color: Colors.violet,
    fontWeight: "600",
  },
  socialLoginButtonContainer: {
    flexDirection: "row",
  },
  socialLoginButton: {
    ...Shadows.default(undefined, undefined, undefined, 2),
    paddingVertical: 0,
    height: 40,
    width: 40,
    borderRadius: 10,
    backgroundColor: Colors.white,
    marginLeft: 20,
  },
  facebookIcon: {
    marginLeft: -6,
    marginTop: -3,
  },
  googleLogo: {
    height: 30,
    width: 30,
    resizeMode: "contain",
  },
  usernameInput: {
    marginBottom: 10,
    height: verticalScale(55),
  },
  secondRow: {
    width: "100%",
    flexDirection: "row",
    marginTop: 10,
  },
  loginText: {
    fontSize: 15,
    color: Colors.violet,
    fontWeight: "600",
  },
  alreadyMemberText: {
    fontSize: 15,
    color: Colors.gray_text_color,
  },
  signupButton: {
    flex: 1,
  },
  signupText: {
    fontSize: 17,
  },
  loginContainer: {
    marginLeft: 30,
    justifyContent: "center",
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
});

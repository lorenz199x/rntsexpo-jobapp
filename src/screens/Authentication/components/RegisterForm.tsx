import React, { Fragment, useEffect, useState } from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import images from "@assets/images";
import ButtonIcon from "@components/Button/ButtonIcon";
import ButtonText from "@components/Button/ButtonText";
import Input from "@components/Input/Input";
import { Labels } from "@shared/enums";
import { ButtonTitle } from "@shared/enums/buttonText";
import { Colors, Shadows } from "@themes/index";
import { verticalScale } from "@utils/sizes";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { useSignUp, useAuth } from "@clerk/clerk-expo";
import Toast from "react-native-toast-message";
import { toastConfig, ToastMessage } from "@components/Toast/Toast";
import Navigation from "@navigation/Navigation";
import { Screen } from "@shared/enums/Screen";

interface RegisterFormInput {
  email: string;
  fullName: string;
  password: string;
  // confirmPassword: string;
}

const RegisterForm: React.FC = () => {
  const { isSignedIn } = useAuth();
  const { isLoaded, signUp, setActive } = useSignUp();
  const [pendingVerification, setPendingVerification] = useState(false);
  const [code, setCode] = useState("");

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInput>({
    defaultValues: {
      email: "",
      fullName: "",
      password: "",
      // confirmPassword: "",
    },
  });

  useEffect(() => {
    if (isSignedIn) {
      Navigation.navigate(Screen.TAB_NAVIGATOR);
    }
  }, [isSignedIn]);

  const onSubmit: SubmitHandler<RegisterFormInput> = async (data) => {
    // You can handle the submission logic here
    console.log(data);
    if (!isLoaded) {
      return;
    }
    try {
      console.log("pasok");

      const test1 = await signUp.create({
        emailAddress: data.email,
        firstName: data.fullName,
        password: data.password,
      });
      console.log("pasok1", test1);

      // send the email.
      const test2 = await signUp.prepareEmailAddressVerification({
        strategy: "email_code",
      });
      // console.log("test2", test2);

      // change the UI to our pending section.
      setPendingVerification(true);
    } catch (err: any) {
      console.log("ERROR:", JSON.stringify(err, null, 2));
      const errorObject = JSON.parse(JSON.stringify(err, null, 2));

      Platform.OS === "ios"
        ? alert(err.errors[0].message)
        : ToastMessage.show({
            type: "error",
            message: errorObject.errors[0].message,
            subMessage: "",
          });
    }
  };

  // This verifies the user using email code that is delivered.
  const onPressVerify = async () => {
    if (!isLoaded) {
      return;
    }
    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });
      await setActive({ session: completeSignUp.createdSessionId });
    } catch (err: any) {
      console.log(JSON.stringify(err, null, 2));
      const errorObject = JSON.parse(JSON.stringify(err, null, 2));
      ToastMessage.show({
        type: "error",
        message: ` ${errorObject.errors[0].message}`,
        subMessage: "",
      });
    }
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

        {/* <Controller
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
        )} */}
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

      {pendingVerification && (
        <View
          style={{ flex: 0.5, justifyContent: "center", alignItems: "center" }}
        >
          <View>
            <TextInput
              value={code}
              placeholder="Code..."
              onChangeText={(code) => setCode(code)}
            />
          </View>
          <TouchableOpacity onPress={onPressVerify}>
            <Text style={{ fontSize: 15, fontWeight: "bold", color: "blue" }}>
              Verify Email
            </Text>
          </TouchableOpacity>
        </View>
      )}

      <SignedIn>
        <Text style={styles.error}>You are Signed in</Text>
      </SignedIn>
      <SignedOut>
        <Text style={styles.error}>You are Signed out</Text>
      </SignedOut>
      <Toast config={toastConfig} position="bottom" bottomOffset={20} />
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

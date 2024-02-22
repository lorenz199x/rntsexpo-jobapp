import React from "react";
import AppNavigator from "@navigation/AppNavigator";
// import { ClerkProvider } from "@clerk/clerk-expo";
// import Config from "react-native-config";
import { ClerkProvider, SignedIn, SignedOut, useAuth } from "@clerk/clerk-expo";
import * as SecureStore from "expo-secure-store";
import { Button, View } from "react-native";

const CLERK_PUBLISHABLE_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;
// "pk_test_bWlnaHR5LWVlbC0yOS5jbGVyay5hY2NvdW50cy5kZXYk";

const tokenCache = {
  async getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

const SignOut = () => {
  const { isLoaded, signOut } = useAuth();
  if (!isLoaded) {
    return null;
  }
  return (
    <View>
      <Button
        title="Sign Out"
        onPress={() => {
          signOut();
        }}
      />
    </View>
  );
};

const Entry = () => {
  console.log(process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY);
  return (
    <ClerkProvider
      publishableKey={CLERK_PUBLISHABLE_KEY}
      tokenCache={tokenCache}
    >
      <AppNavigator />
    </ClerkProvider>
  );
};

export default Entry;

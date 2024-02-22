// screens/PostNewJob.tsx
import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { useAuth, useUser, SignedIn, SignedOut } from "@clerk/clerk-expo";
//utils
import Navigation from "@navigation/Navigation";
import NewJobForm from "./NewJobForm";
import { Screen } from "@shared/enums/Screen";
//components
import Container from "@components/Containers/Container";
import Header from "@components/Header/Header";

const PostNewJob: React.FC = () => {
  const { user } = useUser();
  const { isLoaded, signOut, isSignedIn } = useAuth();
  const userEmail = user?.emailAddresses[0].emailAddress;
  const notSignedIn = isSignedIn ? "Signed in" : "Signed out";

  useEffect(() => {
    if (!isSignedIn) {
      signOut();
      Navigation.navigate(Screen.AUTHENTICATION);
      console.log("logout from joblist useeffect");
    }
  }, [isSignedIn]);

  const handleLogout = () => {
    if (!isLoaded) {
      return null;
    }
    signOut();
    Navigation.navigate(Screen.AUTHENTICATION);
    console.log("logout from postnewjob");
  };

  return (
    <Container style={styles.container}>
      <Header
        title={`Hi ${userEmail}, You are ${notSignedIn}`}
        onButtonPress={handleLogout}
      />
      <NewJobForm />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    // marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
});

export default PostNewJob;

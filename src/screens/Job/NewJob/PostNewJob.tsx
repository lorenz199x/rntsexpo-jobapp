// screens/PostNewJob.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import NewJobForm from "./NewJobForm";

const PostNewJob: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Post New Job</Text> */}
      <NewJobForm />
    </View>
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

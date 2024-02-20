// screens/JobDetails.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

interface JobDetailsProps {
  route: any;
  item: any;
}

const JobDetails = (props: JobDetailsProps) => {
  const { route } = props;
  // const { job } = route.params || { job: { title: "" } };

  console.log("Job", route.params?.item?.JobDetail);

  const item = route.params?.item;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Title: {item.title}</Text>
        <Text style={styles.title}>Description: {item.description}</Text>
        <Text style={styles.title}>Company :{item.company}</Text>
        <Text style={styles.title}>Location :{item.location}</Text>
        <Text style={styles.title}>Posted Date: {item.postedDate}</Text>
        <Text style={styles.title}>Requirements: {item.requirements}</Text>
        <Text style={styles.title}>Skills: {item.skills}</Text>
        <Text style={styles.title}>Salary Range: {item.salaryRange}</Text>
        <Text style={styles.title}>Candidates: {item.candidates}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 18,
    // fontWeight: "bold",
    marginBottom: 16,
  },
  card: {
    backgroundColor: "#e0e0e0",
    padding: 16,
    borderRadius: 8,
  },
});

export default JobDetails;

// screens/JobList.tsx
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRecoilValue } from "recoil";
import { jobListState } from "../../recoil";
import Navigation from "../../navigation/Navigation";
import FlashList from "@components/List/FlashList";
import Container from "@components/Containers/Container";
import JobCard, { JobDetailsProps } from "./components/JobCard";
import { Screen } from "@shared/enums/Screen";

const JobList: React.FC = () => {
  const jobs = useRecoilValue(jobListState);

  return (
    <Container>
      <FlashList
        data={jobs}
        renderItem={({ item }: JobDetailsProps) => (
          <JobCard
            item={item}
            onPressView={() =>
              Navigation.navigate(Screen.JOB_DETAILS, { item })
            }
          />
        )}
        estimatedItemSize={200}
        horizontal={false}
      />
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
    marginBottom: 16,
  },
  card: {
    backgroundColor: "#e0e0e0",
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
  },
});

export default JobList;

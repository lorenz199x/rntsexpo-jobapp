import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRecoilState, useRecoilValue } from "recoil";
import { useAuth, useUser, SignedIn, SignedOut } from "@clerk/clerk-expo";
//utils
import Navigation from "@navigation/Navigation";
import { jobListState } from "../../recoil";
import { Screen } from "@shared/enums/Screen";
import { fetchJobs } from "@services/api";
import { Labels } from "@shared/enums";
//componenets
import FlashList from "@components/List/FlashList";
import Container from "@components/Containers/Container";
import Header from "@components/Header/Header";
import JobCard, { JobDetailsProps } from "./components/JobCard";

const JobList: React.FC = () => {
  // const jobs = useRecoilValue(jobListState);
  const { user } = useUser();
  const { isLoaded, signOut, isSignedIn } = useAuth();
  const [jobs, setJobList] = useRecoilState(jobListState);
  const userEmail = user?.emailAddresses[0].emailAddress;
  const notSignedIn = isSignedIn ? "Signed in" : "Signed out";
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    if (!isSignedIn) {
      signOut();
      Navigation.navigate(Screen.AUTHENTICATION);
      console.log("logout from joblist useeffect");
    }
  }, [isSignedIn]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetchJobs();
        setJobList(res);
      } catch (error) {
        console.error("Error setting joblist:", error);
      }
    };
    fetchData();
  }, []);

  const listEmptyComponent = () => {
    return (
      <View style={styles.noRecordText}>
        <Text>{Labels.NO_RECORDS_FOUND}</Text>
      </View>
    );
  };

  const handleLogout = () => {
    if (!isLoaded) {
      return null;
    }
    signOut();
    Navigation.navigate(Screen.AUTHENTICATION);
    console.log("logout from joblist");
  };

  const onRefresh = async () => {
    setRefreshing(true);
    try {
      const newData = await fetchJobs();
      setJobList(newData);
    } catch (error) {
      console.error("Error refreshing data:", error);
    } finally {
      setRefreshing(false);
    }
  };

  return (
    <Container>
      <Header
        title={`Hi ${userEmail}, You are ${notSignedIn}`}
        onButtonPress={handleLogout}
      />
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
        listEmptyComponent={listEmptyComponent}
        onRefresh={onRefresh}
        refreshing={refreshing}
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
  noRecordText: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default JobList;

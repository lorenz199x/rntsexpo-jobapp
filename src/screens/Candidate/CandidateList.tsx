// screens/CandidateList.tsx
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRecoilState, useRecoilValue } from "recoil";
import { useAuth, useUser, SignedIn, SignedOut } from "@clerk/clerk-expo";
//utils
import Navigation from "../../navigation/Navigation";
import { candidateListState } from "../../recoil";
import { Screen } from "@shared/enums/Screen";
import { fetchCandidates } from "@services/api";
import { Labels } from "@shared/enums";
//componenets
import Container from "@components/Containers/Container";
import FlashList from "@components/List/FlashList";
import Header from "@components/Header/Header";

const CandidateList: React.FC = () => {
  // const candidates = useRecoilValue(candidateListState);
  const { user } = useUser();
  const { isLoaded, signOut, isSignedIn } = useAuth();
  const [candidates, setCandidates] = useRecoilState(candidateListState);
  const userEmail = user?.emailAddresses[0].emailAddress;
  const notSignedIn = isSignedIn ? "Signed in" : "Signed out";
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    if (!isSignedIn) {
      signOut();
      Navigation.navigate(Screen.AUTHENTICATION);
      console.log("logout from candidatelist useeffect");
    }
  }, [isSignedIn]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetchCandidates();
        setCandidates(res);
      } catch (error) {
        console.error("Error setting candidates list:", error);
      }
    };
    fetchData();
  }, []);

  const navigateToCandidateDetails = (item) => {
    Navigation.navigate("CandidateDetails", { item });
  };

  const listEmptyComponent = () => {
    return (
      <View style={styles.noRecordText}>
        <Text>{Labels.NO_RECORDS_FOUND}</Text>
      </View>
    );
  };

  const renderItem = ({ item }: { item: { id: number; name: string } }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigateToCandidateDetails(item)}
    >
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );

  const handleLogout = () => {
    if (!isLoaded) {
      return null;
    }
    signOut();
    Navigation.navigate(Screen.AUTHENTICATION);
    console.log("logout from candidatelist");
  };

  const onRefresh = async () => {
    setRefreshing(true);
    try {
      const newData = await fetchCandidates();
      setCandidates(newData);
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
        data={candidates}
        renderItem={renderItem}
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

export default CandidateList;

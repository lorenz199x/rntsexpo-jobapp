// screens/CandidateList.tsx
import React, { useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRecoilState, useRecoilValue } from "recoil";
import Navigation from "../../navigation/Navigation";
import { candidateListState } from "../../recoil";
import { fetchCandidates } from "@services/api";
import Container from "@components/Containers/Container";
import FlashList from "@components/List/FlashList";

const CandidateList: React.FC = () => {
  // const candidates = useRecoilValue(candidateListState);
  const [candidates, setCandidates] = useRecoilState(candidateListState);

  // console.log("candidates", candidates);

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
        <Text>No records found!</Text>
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

  return (
    <Container>
      <FlashList
        data={candidates}
        renderItem={renderItem}
        estimatedItemSize={200}
        horizontal={false}
        listEmptyComponent={listEmptyComponent}
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

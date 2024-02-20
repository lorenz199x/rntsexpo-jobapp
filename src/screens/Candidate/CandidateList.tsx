// screens/CandidateList.tsx
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
import Navigation from "../../navigation/Navigation";
import { candidateListState } from "../../recoil";

const CandidateList: React.FC = () => {
  const navigation = useNavigation();
  const candidates = useRecoilValue(candidateListState);

  const navigateToCandidateDetails = () => {
    Navigation.navigate("CandidateDetails");
  };

  const renderItem = ({ item }: { item: { id: number; name: string } }) => (
    <TouchableOpacity style={styles.card} onPress={navigateToCandidateDetails}>
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Candidate List</Text>
      <FlatList
        data={candidates}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
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
    marginBottom: 16,
  },
  card: {
    backgroundColor: "#e0e0e0",
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
  },
});

export default CandidateList;

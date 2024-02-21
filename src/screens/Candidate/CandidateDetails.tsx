import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import images from "@assets/images";
import { Colors, Spacings } from "@themes/index";
import { horizontalScale, moderateScale, verticalScale } from "@utils/sizes";

interface CandidateDetailsProps {
  route: any;
  item: any;
}

const CandidateDetails = (props: CandidateDetailsProps) => {
  const { route } = props;
  console.log("Candidate", route.params?.item);
  const item = route.params?.item;
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.imgWrapper}>
          <Image
            style={styles.cardImage}
            resizeMode="cover"
            source={images.Account_image_user}
          />
        </View>

        <View style={styles.list}>
          <View style={styles.flexDirectionRow}>
            <Text style={styles.textStyle}>{item.name}</Text>
          </View>

          <View style={[styles.firstSection, styles.flexDirectionRow]}>
            <Text style={styles.textStyle}>{item.email}</Text>
          </View>

          <View style={styles.midSection}>
            <Text style={styles.textStyle}>YOE: {item.experience}</Text>
          </View>

          <View style={styles.midSection}>
            <Text style={styles.textStyle}>
              Jobs Applied to: {item.jobsAppliedTo}
            </Text>
          </View>

          <View style={styles.midSection}>
            <Text style={styles.textStyle}>
              Link to Resume: {item.resumeUrl}
            </Text>
          </View>

          <View style={styles.thirdSection}>
            <Text style={styles.textStyle}>Skills: {item.skills}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CandidateDetails;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: horizontalScale(20),
    paddingTop: 10,
    paddingBottom: 15,
    marginTop: 20,
    backgroundColor: Colors.cultured_f6f6f6_color,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flexDirection: "row",
    gap: 15,
  },

  list: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 5,
  },
  cardImage: {
    height: verticalScale(70),
    width: horizontalScale(70),
    borderRadius: moderateScale(5),
  },
  imgWrapper: {
    alignItems: "center",
    ...Spacings.padding5,
  },
  flexDirectionRow: {
    // marginBottom: 10,
    flexDirection: "row",
  },
  firstSection: {
    paddingBottom: 10,
    borderBottomColor: "#cbced4",
    borderBottomWidth: 1,
  },
  midSection: {
    // marginBottom: 10,
    flexDirection: "row",
    paddingVertical: 10,
    borderBottomColor: "#cbced4",
    borderBottomWidth: 1,
  },
  thirdSection: {
    flexDirection: "row",
    paddingTop: 10,
    borderBottomColor: "#cbced4",
  },
  textStyle: { flexWrap: "wrap", flex: 1, fontSize: 18 },
});

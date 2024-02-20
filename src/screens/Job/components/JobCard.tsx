import React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Divider from "@components/Divider/Divider";
import Icon from "@components/Icon/Icon";
import { Fonts, Labels } from "@shared/enums";
import { Colors } from "@themes/index";
import { horizontalScale, moderateScale, verticalScale } from "@utils/sizes";

export interface JobDetailsItemProps {
  id: string;
  title: string;
  description: String;
  company: String;
  location: String;
  postedDate: String;
  requirements: String;
  skills: String;
  salaryRange: String;
  candidates: String;
  JobDetail: [];
}
export interface JobDetailsProps {
  /**
   * Item data for the card
   */
  item: JobDetailsItemProps;
  onPressView: () => void;
}
/**
 * A react component that shows the products.
 *
 * @param props - CardOrderProps
 * @type {Component}
 * @returns {React.FC}
 */
const JobCard = (props: JobDetailsProps) => {
  const { item, onPressView } = props;
  console.log("Jobcard", onPressView);
  const {
    id,
    title,
    description,
    company,
    location,
    postedDate,
    requirements,
    skills,
    salaryRange,
    candidates,
    JobDetail,
  } = item;

  //   const renderIcon =
  //     status === "Delivered" ? "check-circle-outline" : "close-circle-outline";
  //   const renderColor = status === "Delivered" ? "green" : "red";

  return (
    <View style={styles.cardContainer}>
      <View style={styles.contentTop}>
        <View>
          {/* <Image style={styles.cardImage} resizeMode="cover" src={image} /> */}
        </View>
        <View style={styles.titleWrapper}>
          <Text style={[styles.textStyle]}>{title}</Text>
          <Text style={[styles.textStyle]}>{location}</Text>
        </View>
        <View>
          <Text style={[styles.textStyle]}>{salaryRange}</Text>
        </View>
      </View>

      <View style={styles.contentBody}>
        <Divider />
        <View style={styles.itemWrapper}>
          <Text style={[styles.textStyle]}>{"Job Details:"}</Text>
          <Text style={[styles.textStyle]}>{description}</Text>
        </View>
        <View style={styles.itemWrapper}>
          <Text style={[styles.textStyle]}>{"Skills:"}</Text>
          <Text style={[styles.textStyle]}>{skills}</Text>
        </View>
        <Divider />
      </View>

      <View style={styles.contentBottom}>
        <TouchableOpacity style={styles.status} onPress={onPressView}>
          <Text
            style={[
              styles.textStyle,
              { fontWeight: "bold", color: "#7986F9", fontSize: 20 },
            ]}
          >
            {"View"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]}>
          <Text
            style={[
              styles.textStyle,
              { fontWeight: "bold", color: "#7986F9", fontSize: 20 },
            ]}
          >
            {"Apply"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: Colors.bgwhite, //bgwhite
    color: Colors.black_text_color,
    maxWidth: "100%",
    borderRadius: moderateScale(10),
    shadowColor: Colors.indigo_color,
    fontFamily: "DMSans-Medium",
    paddingHorizontal: horizontalScale(20),
    paddingVertical: verticalScale(20),
    marginLeft: verticalScale(20),
    marginBottom: moderateScale(20),
    marginRight: verticalScale(20),
    paddingBottom: horizontalScale(20),
    marginTop: horizontalScale(20),
    shadowOffset: {
      width: 0,
      height: Platform.OS === "ios" ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === "ios" ? 2 : 25,
    elevation: Platform.OS === "ios" ? 1 : 4,
  },

  cardImage: {
    height: verticalScale(50),
    width: horizontalScale(50),
    borderRadius: moderateScale(5),
    marginRight: horizontalScale(10),
  },
  contentTop: {
    flex: 1,
    paddingBottom: verticalScale(10),
    marginBottom: verticalScale(13),
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: verticalScale(12),
    paddingRight: verticalScale(50),
    paddingTop: 10,
  },
  titleWrapper: {
    width: "70%",
  },
  contentBody: {
    flex: 2,
    paddingBottom: horizontalScale(7),
  },
  contentBottom: {
    flex: 3,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  divider: {},
  textStyle: {
    color: Colors.black,
    fontSize: moderateScale(14),
    fontWeight: "600",
    fontFamily: Fonts.Metropolis_Medium,
  },
  status: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: verticalScale(10),
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 10,
  },
  itemWrapper: {
    paddingLeft: verticalScale(15),
    paddingBottom: horizontalScale(15),
  },
});

export default JobCard;

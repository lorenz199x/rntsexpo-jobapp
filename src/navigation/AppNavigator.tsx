import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";

import React, { useRef } from "react";
import JobList from "../screens/Job/JobList";
import JobDetails from "../screens/Job/JobDetails";
import CandidateList from "../screens/Candidate/CandidateList";
import CandidateDetails from "../screens/Candidate/CandidateDetails";
import PostNewJob from "../screens/Job/NewJob/PostNewJob";
import Authentication from "@screens/Authentication/Authentication";
import { Screen } from "@shared/enums/Screen";
import Navigation, { navigationRef } from "./Navigation";

/**
 * RootNavigator is the main component defines the whole navigation of the application.
 */
const Stack = createStackNavigator();
const Tab = AnimatedTabBarNavigator();

const JobStack = () => (
  <Stack.Navigator>
    <Stack.Screen name={Screen.JOB_LIST} component={JobList} />
    <Stack.Screen name={Screen.JOB_DETAILS} component={JobDetails} />
    <Stack.Screen name={Screen.POST_NEW_JOB} component={PostNewJob} />
  </Stack.Navigator>
);

const CandidateStack = () => (
  <Stack.Navigator>
    <Stack.Screen name={Screen.CANDIDATE_LIST} component={CandidateList} />
    <Stack.Screen
      name={Screen.CANDIDATE_DETAILS}
      component={CandidateDetails}
    />
  </Stack.Navigator>
);

const TabNavigator = () => {
  return (
    <Tab.Navigator
      // default configuration from React Navigation
      appearance={{
        floating: false,
        activeColors: "#000000",
        activeTabBackgrounds: "#7986F9",
      }}
      tabBarOptions={{
        activeTintColor: "#2F7C6E",
        inactiveTintColor: "#222222",
      }}
    >
      <Tab.Screen name={Screen.JOB} component={JobStack} />
      <Tab.Screen name={Screen.CANDIDATE} component={CandidateStack} />
      <Tab.Screen name={Screen.POST_NEW_JOB} component={PostNewJob} />
    </Tab.Navigator>
  );
};

// const RootNavigator = (props: any) => {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         // default configuration from React Navigation
//         appearance={{
//           floating: false,
//           activeColors: "#000000",
//           activeTabBackgrounds: "#7986F9",
//         }}
//         tabBarOptions={{
//           activeTintColor: "#2F7C6E",
//           inactiveTintColor: "#222222",
//         }}
//       >
//         <Tab.Screen name={Screen.JOB} component={JobStack} />
//         <Tab.Screen name={Screen.CANDIDATE} component={CandidateStack} />
//         <Tab.Screen name={Screen.POST_NEW_JOB} component={PostNewJob} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// };

const RootStack = createStackNavigator();

const RootNavigator = (props: any) => {
  const routeNameRef = useRef();
  return (
    <NavigationContainer
      ref={(navigatorRef: any) => Navigation.setTopLevelNavigator(navigatorRef)}
      onReady={() => {
        routeNameRef.current = navigationRef.getCurrentRoute().name;
      }}
      onStateChange={() => {
        const currentRouteName = navigationRef.getCurrentRoute().name;
        routeNameRef.current = currentRouteName;
      }}
    >
      <RootStack.Navigator initialRouteName={Screen.AUTHENTICATION}>
        <RootStack.Screen name={"Jobify"} component={TabNavigator} />
        <RootStack.Screen name={Screen.JOB_LIST} component={JobList} />
        <RootStack.Screen name={Screen.JOB_DETAILS} component={JobDetails} />
        <RootStack.Screen name={Screen.POST_NEW_JOB} component={PostNewJob} />
        <RootStack.Screen
          name={Screen.AUTHENTICATION}
          component={Authentication}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;

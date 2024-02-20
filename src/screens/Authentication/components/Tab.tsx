import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import ButtonText from '@components/Button/ButtonText';
import LoginForm from '@screens/Authentication/components/LoginForm';
import RegisterForm from '@screens/Authentication/components/RegisterForm';
import { ButtonTitle } from '@shared/enums/buttonText';
import { Colors } from '@themes/index';
import { screenWidth } from '@utils/sizes';

/**
 * The component that is responsible for handling the changing tab of login screen.
 *
 * @type {Component}
 * @returns {React.FC}
 */
const Tab = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <View style={styles.root}>
      <View style={styles.tabContainer}>
        <ButtonText
          onPress={() => setTabIndex(0)}
          buttonText={ButtonTitle.LOGIN}
          customButtonStyle={[styles.buttonContainer, tabIndex === 0 && styles.selectedTab]}
          customTextStyle={styles.buttonText}
        />
        <ButtonText
          onPress={() => setTabIndex(1)}
          buttonText={ButtonTitle.SIGN_UP}
          customButtonStyle={[styles.buttonContainer, tabIndex === 1 && styles.selectedTab]}
          customTextStyle={styles.buttonText}
        />
      </View>
      {tabIndex === 0 ? <LoginForm /> : <RegisterForm />}
    </View>
  );
};

export default Tab;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: screenWidth * 0.9,
    alignSelf: 'center',
  },
  tabContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
    borderRadius: 0,
    backgroundColor: 'transparent',
    marginBottom: 0,
    borderBottomWidth: 2,
    borderColor: 'transparent',
  },
  selectedTab: {
    borderColor: Colors.violet,
  },
  buttonText: {
    color: Colors.black,
    fontWeight: '600',
  },
});

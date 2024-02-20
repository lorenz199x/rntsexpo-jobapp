import React, { FC, ReactNode } from 'react';
import { SafeAreaView, StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { Colors } from '@themes/index';

interface ContainerProps {
  /**
   * A component passed down by the parent component.
   */
  children: ReactNode;

  /**
   * A custom style for the component.
   */
  style?: StyleProp<ViewStyle>;
}

/**
 * A component that will return a SafeAreaView component.
 *
 * @type {Function}
 * @returns {React.FC}
 */
const Container: FC<ContainerProps> = ({ children, style }) => {
  return <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>;
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});

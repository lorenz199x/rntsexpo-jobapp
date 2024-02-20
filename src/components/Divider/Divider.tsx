import React from 'react';
import { StyleSheet, View } from 'react-native';
/**
 * A function that will return dashed line divider.
 *
 * @author {Lorenz}
 * @type {Function}
 * @returns {React.FC}
 */

type borderStyle = 'solid' | 'dotted' | 'dashed';
interface DividerProps {
  /**
   * The pattern of the divider
   */
  pattern?: borderStyle;
  color?: string;
}

/**
 *
 * The component for the Divider.
 *
 * @param param - DividerProps
 * @returns {React.FC}
 */
const Divider = ({ pattern = 'dashed', color = 'gray' }: DividerProps) => {
  return (
    <View style={styles.container}>
      <View style={[styles.content, { borderStyle: pattern, borderColor: color }]} />
    </View>
  );
};

export default Divider;

const styles = StyleSheet.create({
  container: {
    height: 1,
    overflow: 'hidden',
    paddingBottom: 10,
  },
  content: {
    height: 2,
    borderWidth: 1,
    borderColor: 'lightgray',
  },
});

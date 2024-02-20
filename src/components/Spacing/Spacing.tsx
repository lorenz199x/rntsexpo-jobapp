import React, { FC, useMemo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";

interface SpacingProps {
  /**
   * This is for size of space.
   */
  space?: number | string;
  /**
   * This is for enabling the horizontal for space.
   */
  horizontal?: boolean;
  /**
   * This is for custom color
   */
  backgroundColor?: string;
}
/**
 * A component for adding spacing.
 *
 * @type {Function}
 * @returns {React.FC}
 */
const Spacing: FC<SpacingProps> = ({
  space = 10,
  horizontal = false,
  backgroundColor,
}) => {
  const styles = useMemo(
    () =>
      StyleSheet.create({
        spacerStyle: {
          [horizontal ? "width" : "height"]: space,
          backgroundColor: backgroundColor || "transparent",
        } as ViewStyle,
      }),
    [horizontal, space, backgroundColor]
  );

  return <View style={styles.spacerStyle} />;
};

export default Spacing;

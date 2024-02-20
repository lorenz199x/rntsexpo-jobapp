import React, { FC, useEffect } from "react";
import { Image, StyleProp, StyleSheet, ViewStyle } from "react-native";
import Animated, { useSharedValue } from "react-native-reanimated";
// import images from '@assets/images';
import { timing } from "@shared/animation/timing";
import { Colors } from "@themes/index";

interface AppIconProps {
  /**
   * A custom style for contaienr.
   */
  customContainerStyle?: StyleProp<ViewStyle>;

  /**
   * The size of the icon.
   */
  containerSize: number;

  /**
   * The size for the image itself.
   */
  imageSize?:
    | "10%"
    | "20%"
    | "30%"
    | "40%"
    | "50%"
    | "60%"
    | "70%"
    | "80%"
    | "90%"
    | "100%";
}

/**
 * A component that will render app icon.
 *
 * @type {Function}
 * @returns {React.FC}
 */
const AppIcon: FC<AppIconProps> = ({
  containerSize,
  imageSize,
  customContainerStyle,
}) => {
  const width = useSharedValue(containerSize);
  const height = useSharedValue(containerSize);
  const borderRadius = useSharedValue(containerSize / 2);

  const appIconDimension = {
    height,
    width,
    borderRadius,
  };

  const imageStyle = {
    height: imageSize,
    width: imageSize,
  };

  const changeValue = () => {
    width.value = timing(containerSize, 500);
    height.value = timing(containerSize, 500);
    borderRadius.value = timing(containerSize / 2, 500);
  };

  useEffect(() => {
    if (containerSize !== width.value) {
      changeValue();
    }
  }, [containerSize]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Animated.View
      style={[appIconDimension, styles.root, customContainerStyle]}
    >
      {/* <Image source={images.appLogoImage} style={imageStyle} /> */}
    </Animated.View>
  );
};

export default AppIcon;

const styles = StyleSheet.create({
  root: {
    backgroundColor: Colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
});

AppIcon.defaultProps = {
  containerSize: 20,
  imageSize: "80%",
};

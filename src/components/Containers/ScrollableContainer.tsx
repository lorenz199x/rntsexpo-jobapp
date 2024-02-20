import React, { FC, ReactNode } from 'react';
import { Animated, SafeAreaView, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Shadows } from '@themes/index';

interface ScrollableContainerProps {
  /**
   * A component passed down by the parent component.
   */
  children: ReactNode;

  /**
   * A component that will stick the top of this component.
   */
  stickyHeaderComponent?: any;

  /**
   * A custom style for the component.
   */
  style?: StyleProp<ViewStyle>;

  /**
   * A custom style for the scrollview.
   */
  scrollViewStyle?: StyleProp<ViewStyle>;

  /**
   * True if you want to show the scroll indicator and false if not.
   */
  showsVerticalScrollIndicator?: boolean;

  /**
   * The refresh control for the scrollview.
   */
  refreshControl?: any;

  /**
   * A callback function that will return the ref for the scrollview.
   */
  getRef?: Function;

  /**
   * A callback function that will trigger when the scroll event ended.
   */
  onScroll?: Function | undefined;

  /**
   * A callback function that will trigger when we reach the end of the scrollable view.
   */
  onEndReached?: Function | undefined;

  /**
   * A delay before we call the onEndReached function.
   */
  onEndReachedDelay?: number;

  /**
   * A custom style for contentContainerStyle prop of scrollview.
   */
  contentContainerStyle?: StyleProp<ViewStyle>;
}

/**
 * A component that will render a scrollable container for screens.
 *
 * @type {Function}
 * @returns {React.FC}
 */
const ScrollableContainer: FC<ScrollableContainerProps> = (props) => {
  const {
    children,
    style,
    scrollViewStyle,
    showsVerticalScrollIndicator = false,
    stickyHeaderComponent,
    refreshControl,
    getRef,
    onScroll,
    onEndReached,
    onEndReachedDelay = 500,
    contentContainerStyle,
  } = props;

  const scrollY = new Animated.Value(0);
  const stickyTop = scrollY.interpolate({
    extrapolate: 'clamp',
    inputRange: [50, 100],
    outputRange: [-50, 0],
  });
  const stickyTopOpacity = scrollY.interpolate({
    extrapolate: 'clamp',
    inputRange: [50, 100],
    outputRange: [0, 1],
  });

  let onEndReachTimeout: any;
  const isEndReached = ({ layoutMeasurement, contentOffset, contentSize }: any) => {
    return layoutMeasurement.height + contentOffset.y >= contentSize.height - 1;
  };

  return (
    <SafeAreaView {...props}>
      <ScrollView
        contentContainerStyle={contentContainerStyle}
        showsVerticalScrollIndicator={showsVerticalScrollIndicator}
        refreshControl={refreshControl}
        style={scrollViewStyle}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
          useNativeDriver: false,
          listener: (event) => {
            onScroll?.(event);
          },
        })}
        onMomentumScrollEnd={(event) => {
          // ON END REACHED
          if (onEndReached && isEndReached(event.nativeEvent)) {
            clearTimeout(onEndReachTimeout);
            onEndReachTimeout = setTimeout(() => {
              onEndReached?.();
            }, onEndReachedDelay);
          }
        }}
        ref={(ref) => {
          getRef?.(ref);
        }}
      >
        <View style={style}>{children}</View>
      </ScrollView>
      {stickyHeaderComponent && (
        <Animated.View
          style={[styles.animatedView, { top: stickyTop }, { opacity: stickyTopOpacity }]}
        >
          {stickyHeaderComponent}
        </Animated.View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  animatedView: {
    ...Shadows.default(),
    backgroundColor: 'red',
    left: 0,
    opacity: 0,
    position: 'absolute',
    right: 0,
    top: -50,
  },
});

export default ScrollableContainer;

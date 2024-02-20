import { ReduceMotion, withTiming } from 'react-native-reanimated';

/**
 * A custom hook for withTiming of reanimated.
 *
 * @param value - The value from reanimated.
 * @param duration - The duration of the animation.
 * @param customConfig - The custom confirm for withTiming hooks.
 * @param callback - A callback that will trigger after the animation
 * @returns
 */
export const timing = (
  value: number,
  duration?: number,
  customConfig?: Object,
  callback?: () => {}
) => {
  return withTiming(
    value,
    customConfig
      ? customConfig
      : {
          duration: duration,
          reduceMotion: ReduceMotion.System,
        },
    (finished) => {
      if (finished) {
        callback;
      }
    }
  );
};

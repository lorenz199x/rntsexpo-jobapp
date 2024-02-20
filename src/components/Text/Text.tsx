import React, { FC } from 'react';
import { Text as RNText, TextProps } from 'react-native';
import { textSizes } from '@utils/sizes';

/**
 * The size used for text.
 */
export interface CustomTextProps {
  size: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
}

/**
 * A react component that shows the text.
 *
 * @type {Function}
 * @returns {React.FC}
 */
const Text: FC<CustomTextProps & TextProps> = ({ size, children, style, numberOfLines }) => {
  return (
    <RNText style={[size && styles.text(size), style]} numberOfLines={numberOfLines}>
      {children}
    </RNText>
  );
};

export default Text;

const styles = {
  text: (size: string) => {
    return {
      //@ts-ignore
      fontSize: textSizes[size],
    };
  },
};

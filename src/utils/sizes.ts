import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const screenHeight = height;
export const screenWidth = width;

interface TextSizesDefaultProps {
  xs: 10;
  s: 12;
  m: 14;
  l: 16;
  xl: 18;
  xxl: 20;
}

interface TextWeightDefaultProps {
  light: '400';
  normal: '500';
  bold: 'bold';
}

interface MarginSizesDefaultProps {
  xs: 10;
  s: 12;
  m: 14;
  l: 16;
  xl: 18;
}

export const textSizes: TextSizesDefaultProps = {
  xs: 10,
  s: 12,
  m: 14,
  l: 16,
  xl: 18,
  xxl: 20,
};

export const textWeight: TextWeightDefaultProps = {
  light: '400',
  normal: '500',
  bold: 'bold',
};

export const marginSizes: MarginSizesDefaultProps = {
  xs: 10,
  s: 12,
  m: 14,
  l: 16,
  xl: 18,
};

/** for testing similar on react-native-responsive-screen */
export const dimensions = {
  deviceWidth: Dimensions.get('window').width,
  deviceHeight: Dimensions.get('window').height,
};

/** this is baseline from ip14 */
export const guidelineBaseWidth = 390;
export const guidelineBaseHeight = 844;

export const horizontalScale = (size: number) =>
  (dimensions.deviceWidth / guidelineBaseWidth) * size;
export const verticalScale = (size: number) =>
  (dimensions.deviceHeight / guidelineBaseHeight) * size;
export const moderateScale = (size: number, factor = 0.5) =>
  size + (horizontalScale(size) - size) * factor;

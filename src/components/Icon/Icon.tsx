import React, { FC } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';

export type IconTypes =
  | 'Ant'
  | 'Entypo'
  | 'Evil'
  | 'Feather'
  | 'FontAwesome'
  | 'FontAwesome5'
  | 'FontAwesome6'
  | 'Fontisto'
  | 'Foundation'
  | 'Ion'
  | 'Oct'
  | 'Zocial'
  | 'Material'
  | 'MaterialCommunity'
  | 'Simple';

interface IconProps {
  /**
   * The icon type
   */
  type: IconTypes;

  /**
   * Then Icon name
   */
  icon: string;

  /**
   * The custom style assigned from parent component
   */
  style?: StyleProp<ViewStyle>;

  /**
   * The custom icon style assigned from parent component
   */
  iconStyle?: StyleProp<ViewStyle>;

  /**
   * Set the icon color
   */
  color?: string;

  /**
   * Set the icon size
   */
  size?: number;

  /**
   * A function that will execute when pressing the icon/button.
   */
  onPress?: Function;
}

/**
 * A function that will return different Icons.
 *
 * @type {Function}
 * @returns {React.FC}
 */
const Icon: FC<IconProps> = ({ type, icon, style, iconStyle, color, size, onPress }) => {
  return (
    <View style={[styles.root, style]}>
      {type === 'Ant' && (
        <AntDesign name={icon} size={size} color={color} style={iconStyle} onPress={onPress} />
      )}
      {type === 'Entypo' && (
        <Entypo name={icon} size={size} color={color} style={iconStyle} onPress={onPress} />
      )}
      {type === 'Evil' && (
        <EvilIcons name={icon} size={size} color={color} style={iconStyle} onPress={onPress} />
      )}
      {type === 'Feather' && (
        <Feather name={icon} size={size} color={color} style={iconStyle} onPress={onPress} />
      )}
      {type === 'FontAwesome' && (
        <FontAwesome name={icon} size={size} color={color} style={iconStyle} onPress={onPress} />
      )}
      {type === 'FontAwesome5' && (
        <FontAwesome5 name={icon} size={size} color={color} style={iconStyle} onPress={onPress} />
      )}
      {type === 'FontAwesome6' && (
        <FontAwesome6 name={icon} size={size} color={color} style={iconStyle} onPress={onPress} />
      )}
      {type === 'Fontisto' && (
        <Fontisto name={icon} size={size} color={color} style={iconStyle} onPress={onPress} />
      )}
      {type === 'Foundation' && (
        <Foundation name={icon} size={size} color={color} style={iconStyle} onPress={onPress} />
      )}
      {type === 'Ion' && (
        <Ionicons name={icon} size={size} color={color} style={iconStyle} onPress={onPress} />
      )}
      {type === 'Oct' && (
        <Octicons name={icon} size={size} color={color} style={iconStyle} onPress={onPress} />
      )}
      {type === 'Zocial' && (
        <Zocial name={icon} size={size} color={color} style={iconStyle} onPress={onPress} />
      )}
      {type === 'Material' && (
        <MaterialIcons name={icon} size={size} color={color} style={iconStyle} onPress={onPress} />
      )}
      {type === 'MaterialCommunity' && (
        <MaterialCommunityIcons
          name={icon}
          size={size}
          color={color}
          style={iconStyle}
          onPress={onPress}
        />
      )}
      {type === 'Simple' && (
        <SimpleLineIcons
          name={icon}
          size={size}
          color={color}
          style={iconStyle}
          onPress={onPress}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {},
});

export default Icon;

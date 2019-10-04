import React from "react";
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { HeaderButton } from "react-navigation-header-buttons";

import Colors from '../constants/Colors';

// define IconComponent, color, sizes and OverflowIcon in one place
const CustomHeaderButton = props => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={Platform.OS === 'android' ? 'white' : Colors.primary}
    />
  );
};

export default CustomHeaderButton;

import React from 'react';
import {View, Text, TouchableOpacity,StyleSheet} from 'react-native';

const TouchBtn = props => {
  return (
    <TouchableOpacity
    style={props.style}
    onPress={props.onPress}
    >
      {props.children}
    </TouchableOpacity>
  );
};

export default TouchBtn;


//check if button size is ok
//check if CommonActions.goBack() brings user back to last screen
import * as React from 'react';
import { MaterialIcons } from '@expo/vector-icons'; 
import { View, TouchableOpacity } from 'react-native';
import { CommonActions } from '@react-navigation/native';

export default function Item(props) {
  return (
    <View>
    <TouchableOpacity onPress = {() => CommonActions.goBack()}>
      <MaterialIcons name="cancel" size={40} color="red" />
    </TouchableOpacity>
    </View>
  );
}

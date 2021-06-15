import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { View, TouchableOpacity, StyleSheet, Text, Button } from 'react-native';
import { CommonActions } from '@react-navigation/native';

export default function Notification(props) {
    

  return (
    <View style={styles.overall}>
      <View style={styles.notifContainer}>
          <Text style={styles.notifText} >
            {props.text}
          </Text>
          <MaterialIcons name="cancel" size={30} color="red" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overall: {
    flexDirection: 'row',
    width: '100%',
  },
  notifContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
    borderWidth: 1.5,
    borderRadius: 10,
    padding: 8,
    borderColor: 'rgb(174, 182, 191)',
    height: 70,
    width: '100%',
    flexDirection: 'row',
    flexShrink: 1,
  },
  notifText: {
    alignSelf: 'center',
    justifyContent: 'center',
    //minHeight: '100%',
    width: '90%',

  },

});

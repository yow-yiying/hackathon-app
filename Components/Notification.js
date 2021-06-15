import React, { useState } from 'react';
import { Entypo } from '@expo/vector-icons';
import { View, TouchableOpacity, StyleSheet, Text, Button } from 'react-native';
import { CommonActions } from '@react-navigation/native';

export default function Notification(props) {
    

  return (
    <View style={styles.overall}>
      <View style={styles.notifContainer}>
          <Text style={styles.notifText} >
            {props.text}
          </Text>
          <Entypo name="cross" size={24} color="grey" />
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
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    borderColor: '#c9184a',
    height: 70,
    // width: '95%',
    flexDirection: 'row',
    flexShrink: 1,
  },
  notifText: {
    fontSize: 15,
    alignSelf: 'center',
    justifyContent: 'center',
    //minHeight: '100%',
    width: '90%',

  },

});

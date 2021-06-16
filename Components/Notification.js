import React, { useState } from 'react';
import { Entypo } from '@expo/vector-icons';
import { View, TouchableOpacity, StyleSheet, Text, Button } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import FontAwesome from "react-native-vector-icons/FontAwesome";


export default function Notification({text}) {
    

  return (
    // <View style={styles.overall}>
    //   <View style={styles.notifContainer}>
    //     <FontAwesome name="bell" size={20} color = "black"/>
    //       <View>
    //       <Text style={styles.notifText} >
    //         {/* {props.text} */}
    //         {text}
    //       </Text>
    //       </View>
    //       <Entypo name="cross" size={24} color="grey" />
    //   </View>
    // </View>

      <View style={styles.notifContainer}>
        <FontAwesome name="bell" size={20} color = '#c9184a'/>
          <View style = {{marginLeft: 10, marginRight: 50}}>
          <Text numberOfLines = {2} style={styles.notifText} >
            {/* {props.text} */}
            {text}
          </Text>
          </View>
          <View style = {{marginLeft: 'auto'}}>
            <Entypo name="cross" size={24} color="grey" />
          </View>
      </View>

  );
}

const styles = StyleSheet.create({
  overall: {
    // flexDirection: 'row',
    width: '100%',
    alignContent:'center',
  },
  notifContainer: {
    // flex: 1,
    // justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    borderColor: '#c9184a',
    // backgroundColor: "#F9F1F0",
    height: 70,
    // width: '95%',
    flexDirection: 'row',
    // flexShrink: 1,
  },
  notifText: {
    fontSize: 15,
    alignSelf: 'center',
    justifyContent: 'center',
    fontSize: 15,
    //minHeight: '100%',
    // width: '90%',

  },

});

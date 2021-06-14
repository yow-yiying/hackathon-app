import * as React from "react";
import {Text, View, Button} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import styles from './style.js';

function HomeScreen() {
  return (
    <View style={[styles.appBackground, { flex: 1, justifyContent: 'center', alignItems: 'center' }]}>
      <Text>Home!</Text>
    </View>
  );
}


const Stack = createStackNavigator();

export default function HomeStack() {
    return (
    <Stack.Navigator>
        <Stack.Screen name = "Home" component = {HomeScreen} />
        {/* <Stack.Screen name = "HomeSecondScreen" component = {HomeSecondScreen} /> */}
    </Stack.Navigator>
    );
}

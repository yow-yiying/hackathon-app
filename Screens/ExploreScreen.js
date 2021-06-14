import * as React from "react";
import {Text, View, Button} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import styles from './style.js';

function ExploreScreen() {
  return (
    <View style={[styles.appBackground, { flex: 1, justifyContent: 'center', alignItems: 'center' }]}>
      <Text>Explore!</Text>
    </View>
  );
}


const Stack = createStackNavigator();

export default function ExploreStack() {
    return (
    <Stack.Navigator>
        <Stack.Screen name = "Explore" component = {ExploreScreen} />
        {/* <Stack.Screen name = "HomeSecondScreen" component = {HomeSecondScreen} /> */}
    </Stack.Navigator>
    );
}
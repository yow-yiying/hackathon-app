import * as React from "react";
import {Text, View, Button} from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import styles from './style.js';

function NotificationsScreen() {
  return (
    <View style={[styles.appBackground, { flex: 1, justifyContent: 'center', alignItems: 'center' }]}>
      <Text>Notifications!</Text>
    </View>
  );
}


const Stack = createStackNavigator();

export default function NotificationsStack() {
    return (
    <Stack.Navigator>
        <Stack.Screen name = "Notifications" component = {NotificationsScreen} />
        {/* <Stack.Screen name = "HomeSecondScreen" component = {HomeSecondScreen} /> */}
    </Stack.Navigator>
    );
}
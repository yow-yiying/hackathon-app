import * as React from "react";
import {Text, View, Button} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import styles from './style.js';

function UploadScreen() {
  return (
    <View style={[styles.appBackground, { flex: 1, justifyContent: 'center', alignItems: 'center' }]}>
      <Text>Upload!</Text>
    </View>
  );
}


const Stack = createStackNavigator();

export default function UploadStack() {
    return (
    <Stack.Navigator>
        <Stack.Screen name = "Upload" component = {UploadScreen} />
        {/* <Stack.Screen name = "HomeSecondScreen" component = {HomeSecondScreen} /> */}
    </Stack.Navigator>
    );
}
import * as React from "react";
import {Text, View, Button} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

export default function ExploreScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Explore!</Text>
    </View>
  );
}
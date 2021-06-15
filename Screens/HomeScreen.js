import * as React from "react";
import {Text, View, Button, ScrollView,TouchableOpacity} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import styles from './style.js';

import ListingDetailsScreen from './ListingDetailsScreen.js';
import ItemInput from "../Components/ItemInput.js";
import CancelButton from "../Components/CancelButton.js";
import Listing from "../Components/Listing.js";
import DoneButton from "../Components/DoneButton.js";


function HomeScreen({ navigation }) {
  // const pressHandler =() => {
  //   //navigate to detailsScreen
  // }
  return (
    <View style={[styles.appBackground, { flex: 1, justifyContent: 'center', alignItems: 'center' }]}>
      {/* <Text>Home!</Text>
      <ItemInput></ItemInput>
      <CancelButton></CancelButton>
      <Listing></Listing>  
      <DoneButton></DoneButton>*/}
      <View style = {styles.defaultContainer}>
        <Text style = {[styles.detailsText, {fontWeight: 'bold', paddingLeft: 10}]}>Corners near you:</Text>
        <ScrollView>
          <TouchableOpacity onPress={() => navigation.navigate("Details")}>
            <Listing></Listing>
          </TouchableOpacity>
            <Listing></Listing>
            <Listing></Listing>
            <Listing></Listing>
            <Listing></Listing>
        </ScrollView>
      </View>
    </View>
  );
}


const Stack = createStackNavigator();

export default function HomeStack() {
    return (
    <Stack.Navigator>
        <Stack.Screen name = "Home" component = {HomeScreen} />
        <Stack.Screen name = "Details" component = {ListingDetailsScreen} />
    </Stack.Navigator>
    );
}


import * as React from "react";
import { useState } from "react";
import {Text, View, Button, ScrollView,TouchableOpacity, FlatList} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import styles from './style.js';
import { Ionicons } from '@expo/vector-icons';
import ListingDetailsScreen from './ListingDetailsScreen.js';
import ItemInput from "../Components/ItemInput.js";
import CancelButton from "../Components/CancelButton.js";
import Listing from "../Components/Listing.js";
import DoneButton from "../Components/DoneButton.js";


function HomeScreen({ navigation }) {

  const fakeData =[ //name, location, time, messagem requestedItems,items,
    {name:'Food Drive',location:'208 Ang Mo Kio Ave 1, Singapore 560208',time:'0900-1900', message:'Please only take What you need and be considerate',
    picture:require('../assets/foodDrive.png'),requestedItems:'Pasta', items:[
        {itemName:'Myojo Mee Goreng Original',quantity:20,},
        {itemName:'Sunshine Butter Bread',quantity: 10,},
        {itemName:'Ayam Brand Canned Sardines',quantity:5,},
        {itemName:'Campbell Chicken Soup',quantity:5,},
        {itemName:'Halal Pork Luncheon Meat ',quantity:5,},
        {itemName:'Baked Beans',quantity:5,},
        {itemName:'Rice (1kg)',quantity:5,},
    ]},

    {name:'Hand Sanitiser Galore',location:'253 Ang Mo Kio Street 21, Block 253, Singapore 560253',time:'0900-1900', message:'NIL',picture:require('../assets/handSan.jpeg'),requestedItems:'',items:[]},

    {name:'June Giveaway',location:'244 Ang Mo Kio Ave 3, Singapore 560244',time:'0900-1900', message:'NIL',picture:require('../assets/june.jpeg'),requestedItems:'',items:[]},

    {name:'Snacks for everyone',location:'212 Ang Mo Kio Ave 3, Block 212, Singapore 560212',time:'1400-1600', message:'NIL',picture:require('../assets/snacks.jpeg'),requestedItems:'',items:[]},

    {name:'Have a nice day',location:'101 Ang Mo Kio Ave 3, Block 101, Singapore 560101',time:'1100-2000', message:'NIL',picture:require('../assets/niceDay.jpeg'),requestedItems:'',items:[]},

  ]

  const [listings, addListing] = useState(fakeData);

  function renderItem({ item }) {
    return (
      <Listing name = {item.name} location = {item.location} time = {item.time} picture = {item.picture}></Listing>
    )
  }

  return (
    <View style={[styles.appBackground, { flex: 1, justifyContent: 'center', alignItems: 'center' }]}>

      <View style = {styles.defaultContainer}>
        <Text style = {
          [styles.detailsText, 
          {fontWeight: 'bold', padding: 15}
          ]}>
            <Ionicons name="location-sharp" size={27} color='#c9184a' /> Corners near you:
          </Text>
          <FlatList
            data = {listings}
            renderItem = {renderItem} />
        {/* <ScrollView>
          <TouchableOpacity onPress={() => navigation.navigate("Details")}>
            <Listing></Listing>
          </TouchableOpacity>

          
            {/* <Listing></Listing>
            <Listing></Listing>
            <Listing></Listing>
            <Listing></Listing> */}
        {/* </ScrollView> */}
      </View>
    </View>
  );
}


const Stack = createStackNavigator();

export default function HomeStack() {
    return (
    <Stack.Navigator>
        <Stack.Screen name = "Home" component = {HomeScreen} 
            options = {{ 
              title: 'APP NAME',
              headerRight: () => (
                <View style = {{paddingRight: 10}}>
                  <Ionicons name="person-circle" size={40} color='#c9184a' />
                </View>
              ),
              // headerRight: () => (
              //   <Ionicons name="person-circle" size={24} color="black" />
              // )
              }}/>
        <Stack.Screen name = "Details" component = {ListingDetailsScreen} />
    </Stack.Navigator>
    );
}


import * as React from "react";
import { useState } from "react";
import {
  Text,
  View,
  Button,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
  Modal,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import styles from "./style.js";
import { Ionicons } from "@expo/vector-icons";
import ListingDetailsScreen from "./ListingDetailsScreen.js";
import ItemInput from "../Components/ItemInput.js";
import CancelButton from "../Components/CancelButton.js";
import Listing from "../Components/Listing.js";
import DoneButton from "../Components/DoneButton.js";

function HomeScreen({ navigation }) {
  const fakeData = [
    //name, location, time, messagem requestedItems,items,
    {
      key: "1",
      name: "Food Drive",
      location: "208 Ang Mo Kio Ave 1, Singapore 560208",
      time: "0900-1900",
      message: "Please only take what you need and be considerate",
      picture: require("../assets/foodDrive.png"),
      itemsAvailable: [
        { itemName: "Myojo Mee Goreng Original", quantity: 20 },
        { itemName: "Sunshine Butter Bread", quantity: 10 },
        { itemName: "Ayam Brand Canned Sardines", quantity: 5 },
        { itemName: "Campbell Chicken Soup", quantity: 5 },
      ],
      itemsRequested: [
        { itemName: "Halal Pork Luncheon Meat " },
        { itemName: "Baked Beans" },
        { itemName: "Rice (1kg)" },
      ],
    },

    {
      key: "2",
      name: "Hand Sanitiser Galore",
      location: "253 Ang Mo Kio Street 21, Block 253, Singapore 560253",
      time: "0900-1900",
      message: "NIL",
      picture: require("../assets/handSan.jpeg"),
      itemsAvailable: [{}],
      itemsRequested: [{}],
    },

    {
      key: "3",
      name: "June Giveaway",
      location: "244 Ang Mo Kio Ave 3, Singapore 560244",
      time: "0900-1900",
      message: "NIL",
      picture: require("../assets/june.jpeg"),
      itemsAvailable: [{}],
      itemsRequested: [{}],
    },

    {
      key: "4",
      name: "Snacks for everyone",
      location: "212 Ang Mo Kio Ave 3, Block 212, Singapore 560212",
      time: "1400-1600",
      message: "NIL",
      picture: require("../assets/snacks.jpeg"),
      itemsAvailable: [{}],
      itemsRequested: [{}],
    },

    {
      key: "5",
      name: "Have a nice day",
      location: "101 Ang Mo Kio Ave 3, Block 101, Singapore 560101",
      time: "1100-2000",
      message: "NIL",
      picture: require("../assets/niceDay.jpeg"),
      itemsAvailable: [{}],
      itemsRequested: [{}],
    },
    {
      key: "6",
      name: "Soup Fest",
      location: "103 Ang Mo Kio Ave 3, Block 103, Singapore 560103",
      time: "1000-2200",
      message: "A can of soup a day keeps the doctor away",
      picture: require("../assets/soupFest.jpeg"),
      itemsAvailable: [
        { itemName: "Campbell Mushroom Soup", quantity: 5 },
        { itemName: "Campbell Chicken Soup", quantity: 10 },
        { itemName: "Campbell Clam Chowder Soup", quantity: 5 },
      ],
      itemsRequested: [{ itemName: "Vegetable Soup" }],
    },
    {
      key: "7",
      name: "Free Drinks For Our Deliver/Healthcare Workers",
      location: "235 Ang Mo Kio Ave 3, Block 235, Singapore 560235",
      time: "0800-2300",
      message: "Thank you to all our wonderful workers!!",
      picture: require("../assets/freeDrinks.jpeg"),
      itemsAvailable: [{}],
      itemsRequested: [{}],
    },
    {
      key: "8",
      name: "Ang Mo Kio Kindness Corner",
      location: "218 Ang Mo Kio Ave 1, Block 218, Singapore 560218",
      time: "1200-1800",
      message: "This is for anyone who needs it",
      picture: require("../assets/amk.jpeg"),
      itemsAvailable: [{}],
      itemsRequested: [{}],
    },
  ];

  const [listings, addListing] = useState(fakeData);

  function renderItem({ item }) {
    return (
      <Listing
        name={item.name}
        location={item.location}
        time={item.time}
        picture={item.picture}
      ></Listing>
    );
  }

  const [modalVisible, setModalVisible] = useState(true);

  return (
    <View
      style={[
        styles.appBackground,
        { flex: 1, justifyContent: "center", alignItems: "center" },
      ]}
    >
      <View style={styles.centeredView}>
        <Modal transparent={true} visible={modalVisible}>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flex: 1,
                width: "100%",
                backgroundColor: "white",
                borderRadius: 20,
                padding: 30,
                alignItems: "center",
                shadowColor: "#000",
              }}
            >
              <Text style={styles.modalText}>Welcome to Donation!</Text>
              <TouchableOpacity
                style={{
                  borderRadius: 20,
                  padding: 10,
                  elevation: 2,
                  backgroundColor: "pink",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => setModalVisible(false)}
              >
                <Text
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    textAlign: "center",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Home Screen
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>

      <View style={styles.defaultContainer}>
        <Text style={[styles.detailsText, { fontWeight: "bold", padding: 15 }]}>
          <Ionicons name="location-sharp" size={27} color="#c9184a" /> Corners
          near you:
        </Text>
        <FlatList
          data={listings}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Details", item)}
            >
              <Listing
                name={item.name}
                location={item.location}
                time={item.time}
                picture={item.picture}
                itemsAvailable={item.itemsAvailable}
                itemsRequested={item.itemsRequested}
              ></Listing>
            </TouchableOpacity>
          )}
        />
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
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "APP NAME",
          // headerLeft: () => (
          //   <View style = {{paddingLeft: 10}}>
          //     <Image source = {require('../assets/logo.png')}/>
          //   </View>
          // ),
          headerRight: () => (
            <View style={{ paddingRight: 10 }}>
              <Ionicons name="person-circle" size={40} color="#c9184a" />
              {/* <Image source = {require('../assets/logo.png')}/> */}
            </View>
          ),
          // headerRight: () => (
          //   <Ionicons name="person-circle" size={24} color="black" />
          // )
        }}
      />
      <Stack.Screen name="Details" component={ListingDetailsScreen} />
    </Stack.Navigator>
  );
}

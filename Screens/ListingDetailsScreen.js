import * as React from "react";
import {
  Image,
  Text,
  View,
  Button,
  ScrollView,
  StyleSheet,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Item from "../Components/Item.js";
import ItemReq from "../Components/ItemReq.js";
import { render } from "react-dom";

export default function ListingDetailsScreen({ route, navigation }) {
  const { name, location, time, message, picture, itemsAvailable, itemsRequested } = route.params;

  return (
    <View
      style={[
        styles.appBackground,
        { flex: 1, justifyContent: "center", alignItems: "center" },
      ]}
    >
      <Text style={styles.detailsCornerName}>{name}</Text>
      <ScrollView>
        <View style={styles.photoContainer}>
          <Image
            style={styles.detailsPhoto}
            source={{ uri: "https://wallpaperaccess.com/full/1261215.jpg" }}
          />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.detailsText}>
            <Ionicons name="location-sharp" size={24} color="#c9184a" />{" "}
            {location}
          </Text>
          <Text style={styles.detailsText}>
            <Ionicons
              style={{ marginRight: 5 }}
              name="time"
              size={24}
              color="#c9184a"
            />{" "}
            {time}
          </Text>
          <View style={{ margin: 5 }}>
            <Text style={styles.headers}>Message:</Text>
            <Text style={styles.detailsText}>{message}</Text>
          </View>
          <View style={{ margin: 5 }}>
            <Text style={styles.headers}>Items available:</Text>
  
            {itemsAvailable.map((oneItem,index) => {
            return (
                <View key={index} style={styles.item}>
                    <Text style={styles.itemText}>{oneItem.itemName}</Text>
              <Text style={styles.itemText}>{oneItem.quantity}</Text>
                </View>
            );
          })}   
    
          </View>

          <View style={{ margin: 5 }}>
            <Text style={styles.headers}>Items requested:</Text>
            
            {itemsRequested.map((oneItem,index) => {
            return (
                <View key={index} style={styles.item}>
                    <Text style={styles.itemText}>{oneItem.itemName}</Text>
              <Text style={styles.itemText}>{oneItem.quantity}</Text>
                </View>
            );
          })}  
            
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    marginRight: 10,
  },
  appBackground: {
    backgroundColor: "white",
  },
  detailsCornerName: {
    fontSize: 30,
    fontWeight: "bold",
    margin: 10,
  },
  detailsContainer: {
    flex: 1,
    width: "90%",
    height: "40%",
    paddingTop: 5,
    justifyContent: "center",
  },
  headers: {
    fontWeight: "bold",
    fontSize: 25,
    padding: 5,
  },
  // defaultContainer: {
  //     flex: 1,
  //     width: "80%",
  //     // alignText: 'right',
  //     padding: 10,
  //     margin: 10,
  // },
  detailsText: {
    fontSize: 25,
    padding: 5,
  },
  detailsPhoto: {
    flexDirection: "row",
    width: 200,
    height: 200,
    borderRadius: 10,
    margin: 10,
    marginBottom: 20,
  },
  photoContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    width: "100%",
    height: "100%",
  },
  item: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "pink",
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    width: 300,
  },
  itemText: {
    fontSize: 20,
  },
});

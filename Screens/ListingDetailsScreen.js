import * as React from "react";
import {Image, Text, View, Button, ScrollView, StyleSheet} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

export default function ListingDetailsScreen() {

  return (
    <View style={[styles.appBackground, { flex: 1, justifyContent: 'center', alignItems: 'center' }]}>
        <Text style = {styles.detailsCornerName}>Kindness Corner</Text>
        <ScrollView>
            <View style = {styles.photoContainer}>
            <Image style = {styles.detailsPhoto}
                source = {{uri: "https://wallpaperaccess.com/full/1261215.jpg"}}/>
            </View>
            <View style = {styles.detailsContainer}>
                <Text style = {styles.detailsText}>[Location]</Text>
                <Text style = {styles.detailsText}>[Time]</Text>
                <Text style = {styles.detailsText}>Items available:</Text>
                {/* <Item></Item> */}
                <Text style = {styles.detailsText}>Message:</Text>
                <Text style = {styles.detailsText}>
                    the quick brown fox jumps over the lazy dog the quick brown fox jumps over 
                    the lazy dog the quick brown fox jumps over the lazy dog
                </Text>

            </View>
            </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    appBackground: {
        backgroundColor: 'white',
    },
    detailsCornerName: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    detailsContainer: {
        width: '80%',
        height: '40%',
        padding: 10,
        margin: 10,
        justifyContent: 'center',
    },
    defaultContainer: {
        flex: 1,
        width: "98%",
        // alignText: 'right',
        padding: 10,
        margin: 10,
    },
    detailsText: {
        fontSize: 25,
        padding: 5,
    },
    detailsPhoto: {
        flexDirection: 'row',
        width: '80%',
        height: '40%',
    },
    photoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        // width: '80%',
        // height: '40%',
    }

})


import * as React from "react";
import {Image, Text, View, Button, ScrollView, StyleSheet} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Item from '../Components/Item.js';

export default function ListingDetailsScreen() {

  return (
    <View style={[styles.appBackground, { flex: 1, justifyContent: 'center', alignItems: 'center' }]}>
        <Text style = {styles.detailsCornerName}>Kindness Corner</Text>
            <View style = {styles.photoContainer}>
            <Image style = {styles.detailsPhoto}
                source = {{uri: "https://wallpaperaccess.com/full/1261215.jpg"}}/>
            </View>
            <ScrollableView>
            <View style = {styles.detailsContainer}>
                <Text style = {styles.detailsText}>
                    <Ionicons name="location-sharp" size={24} color="#c9184a"/>  [Location]
                </Text>
                <Text style = {styles.detailsText}>
                    <Ionicons style = {{ marginRight: 5 }} name="time" size={24} color="#c9184a" />  [Time]
                </Text>
                <Text style = {styles.headers}>Items available:</Text>
                <Item></Item>
                <Text style = {styles.headers}>Message:</Text>
                <Text style = {styles.detailsText}>
                    the quick brown fox jumps over the lazy dog the quick brown fox jumps over 
                    the lazy dog the quick brown fox jumps over the lazy dog
                </Text>

            </View>
            </ScrollableView>
    </View>
  );
}

const styles = StyleSheet.create({
    icon: {
        marginRight: 10,

    },
    appBackground: {
        backgroundColor: 'white',
    },
    detailsCornerName: {
        fontSize: 30,
        fontWeight: 'bold',
        margin: 10,
    },
    detailsContainer: {
        flex: 1,
        width: '90%',
        height: '40%',
        paddingTop: 5,
        justifyContent: 'center',
    },
    headers: {
        fontWeight: 'bold',
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
        flexDirection: 'row',
        width: '90%',
        height: '100%',
        borderRadius: 10,
    },
    photoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        width: '100%',
        height: '100%',
    }

})


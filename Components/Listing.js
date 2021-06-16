import React from "react";
import { View, Text, Image, StyleSheet} from "react-native";
import { Ionicons } from '@expo/vector-icons';

// {uri: "https://wallpaperaccess.com/full/1261215.jpg"}
export default function Listing( {name, location, time, picture,itemsAvailable, itemsRequested}) {
    return (
        <View style = {listingStyles.listingContainer}>
            <Image style = {listingStyles.listingPhoto}
            source = {picture}/>
            <View style = {listingStyles.listingTextContainer}>
                <Text style = {listingStyles.listingCornerName}>{name}</Text>
                <Text style = {listingStyles.listingOtherText}><Ionicons style = {{marginRight: 5}} name="location-sharp" size={20} color="#c9184a"/>{location}</Text>
                <Text style = {listingStyles.listingOtherText}><Ionicons style = {{ marginRight: 5 }} name="time" size={20} color="#c9184a" />{time}</Text>
            </View>
        </View>
    )
}

const listingStyles = StyleSheet.create({
    listingContainer: {
        flexDirection: 'row',
        width: '95%',
        backgroundColor: "#FADCD9",
        borderRadius: 20,
        padding: 15,
        margin: 10,
        
    }, 
    listingPhoto: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    listingTextContainer: {
        flex: 1,
        paddingLeft: 25,
        justifyContent: 'center',
    },
    listingCornerName: {
        fontWeight: 'bold',
        fontSize: 20,

    },
    listingOtherText: {
        fontSize: 15,
    }
})

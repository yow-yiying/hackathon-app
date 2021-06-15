import React from "react";
import { View, Text, Image, StyleSheet} from "react-native";

export default function Listing() {
    return (
        <View style = {listingStyles.listingContainer}>
            <Image style = {listingStyles.listingPhoto}
            source = {{uri: "https://wallpaperaccess.com/full/1261215.jpg"}}/>
            <View style = {listingStyles.listingTextContainer}>
                <Text style = {listingStyles.listingCornerName}>Kindness Corner</Text>
                <Text style = {listingStyles.listingOtherText}>some location</Text>
                <Text style = {listingStyles.listingOtherText}>timing</Text>
            </View>
        </View>
    )
}

const listingStyles = StyleSheet.create({
    listingContainer: {
        flexDirection: 'row',
        width: '95%',
        backgroundColor: 'pink',
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
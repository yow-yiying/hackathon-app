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

const fakedata =[ //name, location, time, messagem requestedItems,items,
    {name:'Food Drive',location:'208 Ang Mo Kio Ave 1, Singapore 560208',time:'0900-1900', message:'Please only take What you need and be considerate',
    picture:require('../assets/foodDrive.png'),requestedItems:
    [ {itemName:'Halal Pork Luncheon Meat ',quantity:5,},
    {itemName:'Baked Beans',quantity:5,},
    {itemName:'Rice (1kg)',quantity:5,},],
    items:[
        {itemName:'Myojo Mee Goreng Original',quantity:20,},
        {itemName:'Sunshine Butter Bread',quantity: 10,},
        {itemName:'Ayam Brand Canned Sardines',quantity:5,},
        {itemName:'Campbell Chicken Soup',quantity:5,},
    ]},

    {name:'Hand Sanitiser Galore',location:'253 Ang Mo Kio Street 21, Block 253, Singapore 560253',time:'0900-1900', message:'NIL',picture:require('../assets/handSan.jpeg'),requestedItems:'',items:[]},

    {name:'June Giveaway',location:'244 Ang Mo Kio Ave 3, Singapore 560244',time:'0900-1900', message:'NIL',picture:require('../assets/june.jpeg'),requestedItems:'',items:[]},

    {name:'Snacks for everyone',location:'212 Ang Mo Kio Ave 3, Block 212, Singapore 560212',time:'1400-1600', message:'NIL',picture:require('../assets/snacks.jpeg'),requestedItems:'',items:[]},

    {name:'Have a nice day',location:'101 Ang Mo Kio Ave 3, Block 101, Singapore 560101',time:'1100-2000', message:'NIL',picture:require('../assets/niceDay.jpeg'),requestedItems:'',items:[]},

   
  ]
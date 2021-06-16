import React, { useState } from "react";
import {
  Platform,
  Text,
  View,
  FlatList,
  Alert,
  Button,
  StyleSheet,
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
//import style from "./style";
import DoneButton from "../Components/DoneButton";
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import ItemInput from "../Components/ItemInput";


function UploadScreen({navigation}) {
  const pressHandler = () => {
    Alert.alert("Note", "The listing will be automatically deleted once it reaches 2200 today!", [
      { text: "Confirm", onPress: () => returnToHomeScreen },
      { text: "Cancel", style: "cancel" },
    ]);
  };
  const returnToHomeScreen = () => {
    //navigation.navigate('HomeScreen')
  };

  const [inputItem, setInputItem] = useState();
  const [items, setItemsArr] = useState([]);
  const num = [0,1,2,3,4,5,6,7,8,9];

  const addItem = () => {
    Keyboard.dismiss();
    console.log(inputItem);

    setItemsArr([...items, inputItem],[num]);
    setInputItem('');
  };
  const { width, height } = Dimensions.get('window');
  return (
    <SafeAreaView style={{flex:1,}}>
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      accessible={false}
    >
      <View style={styles.emptySpace}>
      <ScrollView keyboardShouldPersistTaps="handled">
      <KeyboardAvoidingView behavior={"padding"} enabled  style= {{flexGrow:1,height:'100%'}}>
        
          <View style={styles.pageContainer}>
            <View style={styles.imageContainer}>
            <Ionicons name="image" size={24} color="black" style = {styles.uploadPicture} />
              <Text style={styles.imageText}> Upload Your Image Here! </Text>
              {/* <TouchableOpacity>    
                <MaterialIcons
                  name="edit"
                  size={25}
                  color="black"
                  style={styles.uploadPicture}
                  margin={10}
                />
              </TouchableOpacity> */}
            </View>

            <TextInput style={styles.itemBox} placeholder={"Name of Corner"} />

            <TextInput
              style={styles.itemBox} //make it only 6 digits for postal code
              placeholder={"Location: "}
            />

            <View style={styles.timeContainer}>
              <View style={[styles.itemBox, styles.timeBox]}>
                <TextInput
                  placeholder={"From: 0000"} //default numbers only 24 hour clock
                  keyboardType="numeric"
                />
              </View>
              <Text style={styles.timeText}>To</Text>
              <View style={[styles.itemBox, styles.timeBox]}>
                <TextInput
                  placeholder={"To: 2359"} //
                  keyboardType="numeric"
                />
              </View>
            </View>

            <View style={styles.itemContainer}>
              <View style={styles.itemHeader}>
                <Text style={styles.itemText}>Items:</Text>

                <TouchableOpacity onPress={() => addItem()}>
                <MaterialIcons
                  name="add"
                  size={25}
                  color="black"
                />
                </TouchableOpacity>
              </View>

              {items.map((inputItem,index) => {
            return (
                <ItemInput key={index}/>
            );
          })}
            </View>

            <View style={styles.messageContainer}>
            <KeyboardAvoidingView behavior={"padding"} enabled  style={{flexGrow:1,height:'100%'}}> 
                <Text style={styles.itemText}>Message:</Text>
                <TextInput
                  style={styles.itemBox}
                  placeholder={"Leave a message"}
                />
                
              </KeyboardAvoidingView>
            </View>
            <View style={{ backgroundColor: "white" }}>
              <TouchableOpacity onPress={pressHandler}>
                <DoneButton onPress={pressHandler} />
              </TouchableOpacity>
            </View>
          </View>
          </KeyboardAvoidingView>
          
      </ScrollView>
      </View>
    </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const Stack = createStackNavigator();

export default function UploadStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Upload" 
        component={UploadScreen} 
        options={{
            title: "Upload",
            headerLeft: () => (
              <View style = {{paddingLeft: 20}}>
                <Image style = {{width: 70, height: 150,resizeMode:'contain',flex:1}} source = {require("../assets/logo.png")}/> 
              </View>
            ),
          }}
        />
      {/* <Stack.Screen name = "HomeSecondScreen" component = {HomeSecondScreen} /> */}
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  emptySpace: {
    backgroundColor: "white",
    flex:1,
  },
  pageContainer: {
    backgroundColor: "white",
    flex: 1,
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "space-between",
    width: "100%",
  },
  imageContainer: {
    borderRadius: 20,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#c9184a",
    borderStyle: 'dashed',
    borderWidth: 3,
    backgroundColor: "#FADCD9",
    margin: 10,
    flexDirection: "row",
  },
  imageText: {
    color: "black",
    fontSize: 24,
    fontStyle: "italic",
  },
  itemBox: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    height: 40,
    backgroundColor: "rgb(255, 255, 255)",
    borderRadius: 5,
    margin: 10,
    borderWidth: 2,
    borderColor: "#c9184a",
  },
  timeContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    height: 40,
    alignItems: "center",
  },
  timeBox: {
    width: "40%",
  },
  timeText:{
    fontSize:18,
  },
  itemContainer: {
    width: "100%",
    
    //height: 100,
    justifyContent: "space-evenly",
    alignContent: "space-between",
    backgroundColor: "white",
  },
  itemHeader: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    marginRight: 10,
  },
  itemText: {
    marginLeft: 10,
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  messageContainer: {
    width: "100%",
    height: 100,
    justifyContent: "space-evenly",
    alignContent: "space-between",
    backgroundColor: "white",
    marginBottom: 10,
    marginTop:10,
  },
});

//behavior={Platform.select({ android: "height", ios: "padding" })}
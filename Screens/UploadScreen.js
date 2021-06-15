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
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
//import style from "./style";
import DoneButton from "../Components/DoneButton";
import { MaterialIcons } from "@expo/vector-icons";
import ItemInput from "../Components/ItemInput";
import Item from "../Components/Item";

function UploadScreen() {
  const addBox = () => {};
  const pressHandler = () => {
    Alert.alert("Confirm", "The listing cannot be deleted once created", [
      { text: "Confirm", onPress: () => returnToHomeScreen },
      { text: "Cancel", style: "cancel" },
    ]);
  };
  const returnToHomeScreen = () => {
    //navigate to home screen and save listing
  };

  const [inputItem, setInputItem] = useState();
  const [items, setItemsArr] = useState([]);

  const addItem = () => {
    console.log(inputItem);
    setItemsArr([...items, inputItem]);
    setInputItem('');
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
    accessible={false} 
    >
      <ScrollView keyboardShouldPersistTaps="handled" style={styles.emptySpace}>
        <KeyboardAvoidingView
          behavior={Platform.select({ android: "height", ios: "padding" })}
        >
          <View style={styles.pageContainer}>
            <View style={styles.imageContainer}>
              <Text style={styles.imageText}>Upload Your Image Here! </Text>
              <TouchableOpacity>    
                <MaterialIcons
                  name="edit"
                  size={25}
                  onPress={addBox}
                  color="black"
                  style={styles.uploadPicture}
                  margin={10}
                />
              </TouchableOpacity>
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

            <View style={styles.oneItem}>
              <View style={styles.itemHeader}>
                <Text style={styles.itemText}>Items:</Text>

                <TouchableOpacity onPress={() => addItem()}>
                <MaterialIcons
                  name="add"
                  size={25}
                  color="deeppink"
                />
                </TouchableOpacity>
              </View>

              {items.map((inputItem, index) => {
            return (
                <ItemInput key={index} />
            );
          })}
            </View>

            <View style={styles.messageContainer}>
              <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ flex: 1 }}
              >
                <Text style={styles.itemText}>Message:</Text>
                <TextInput
                  style={styles.itemBox}
                  placeholder={"Leave a message"}
                />
                
              </KeyboardAvoidingView>
            </View>
            <View style={{ backgroundColor: "white", justifyContent: 'space-between'}}>
              <TouchableOpacity onPress={pressHandler}>
                <DoneButton onPress={pressHandler} />
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </TouchableWithoutFeedback> 
  );
}

const Stack = createStackNavigator();

export default function UploadStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Upload" component={UploadScreen} />
      {/* <Stack.Screen name = "HomeSecondScreen" component = {HomeSecondScreen} /> */}
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  emptySpace: {
    backgroundColor: "white",
    //flex:1,
    flexGrow: 1
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
    borderRadius: 5,
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "rgb(174, 182, 191)",
    backgroundColor: "pink",
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
    borderColor: "pink",
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
  itemContainer: {
    width: "100%",
    height: 100,
    justifyContent: "space-evenly",
    alignContent: "space-between",
    backgroundColor: "white",
  },
  itemHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: '100%',
    marginRight: 10,
    marginTop: 5,
  },
  itemText: {
    marginLeft: 10,
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
    alignContent: 'center',
  },
  oneItem: {
    alignItems: 'center',
    height: '30%',
  },
  messageContainer: {
    width: "100%",
    height: 100,
    justifyContent: "space-evenly",
    alignContent: "space-between",
    backgroundColor: "white",
    marginTop: -5,
    //marginBottom: 10,
  },
});

import * as React from "react";
import {Text, View, Button, StyleSheet, TextInput,Keyboard,KeyboardAvoidingView,SafeAreaView,ScrollView,TouchableWithoutFeedback} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
//import style from "./style";
import DoneButton from "../Components/DoneButton";

import { MaterialIcons } from '@expo/vector-icons'; 
function UploadScreen() {
  const addBox = () =>{}
  return ( 
    <SafeAreaView>
        <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()} accessible={false}>
            <ScrollView keyboardShouldPersistTaps='handled'>
                <View style={styles.pageContainer}>  
                    <KeyboardAvoidingView
                        behavior={Platform.select({ android: "height", ios: "padding" })}>
                    <View style={styles.imageContainer}>
                        <Text style={styles.imageText}>Upload Your Image Here! </Text>
                        <MaterialIcons name='edit' size={25} onPress={addBox} color='black' style={styles.uploadPicture}/> 
                    </View>
        
                    <TextInput
                        style={styles.itemBox}
                        placeholder={'Name of Corner'}
                    />
    
                    <TextInput
                        style={styles.itemBox} //make it only 6 digits for postal code
                        placeholder={'Location: Postal Code'}
                        keyboardType = 'numeric'
                    />

                    <View style={styles.timeContainer}> 
                        <View style={[styles.itemBox,styles.timeBox]}>
                            <TextInput
                                placeholder={'From: 0000'} //default numbers only 24 hour clock
                                keyboardType = 'numeric'
                            />
                        </View>
                        <Text style={styles.timeText}>To</Text>
                        <View style={[styles.itemBox,styles.timeBox]}>
                            <TextInput
                                placeholder={'To: 2359'} //defaulty numbers only
                                keyboardType = 'numeric'
                            />
                        </View>
                    </View>

                    <View style={styles.itemContainer}>
                        <View style={styles.itemHeader}>
                            <Text style={styles.itemText}>Items:</Text>
                            <MaterialIcons name='add' size={20} onPress={addBox} color='deeppink' /> 
                        </View>    
                        <View style={styles.itemQuantityContainer}>
                            <TextInput
                                style={[styles.itemBox,styles.itemTextBox]}
                                placeholder={'Item'}
                            />
                            <TextInput
                                style={[styles.quantityTextBox,styles.quantityBox]}
                                placeholder={'Quantity'}
                                keyboardType = 'numeric'
                            />
                        </View>
                
                    </View>

                    <View style={styles.itemContainer}>
                        <Text style={styles.itemText} >Message:</Text>
                        <TextInput
                            style={styles.itemBox}
                            placeholder={'Leave a message'}
                        />
                     </View>
                    <View style={{backgroundColor:'white'}}>
                        <DoneButton/>
                    </View>
                    </KeyboardAvoidingView>
                </View>
            </ScrollView>  
        </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}


const Stack = createStackNavigator();

export default function UploadStack() {
    return (
    <Stack.Navigator>
        <Stack.Screen name = "Upload" component = {UploadScreen} />
        {/* <Stack.Screen name = "HomeSecondScreen" component = {HomeSecondScreen} /> */}
    </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
  pageContainer: {
    backgroundColor:'white',
    flex:1,
    flexDirection:'column',
    alignItems:'stretch',
    justifyContent: 'space-between',
    width:'100%',
},
imageContainer:{
  borderRadius: 5,
  height: '30%',
  justifyContent:'center',
  alignItems:'center',
  borderColor: 'rgb(174, 182, 191)',
  backgroundColor:'pink',
  margin:10,
  flexDirection:'row',
},
imageText:{
  color: 'black',
  fontSize:24,
  fontStyle:'italic',   
},
 itemBox: {
  paddingHorizontal: 10,
  paddingVertical: 10,
  height: 40,
  backgroundColor: 'rgb(255, 255, 255)',
  borderRadius: 5,
  margin: 10,
  borderWidth: 2,
  borderColor: 'pink',
},
timeContainer: {
  marginTop:10,
  flexDirection:'row',
  justifyContent:'space-between',
  height:40,
  alignItems:'center',
},
timeBox:{
  width:'40%',
},
itemContainer: {
  width:'100%',
  height:100,
  justifyContent:"space-evenly",
  alignContent:'space-between',
  backgroundColor:'white',
},
itemHeader:{
    flexDirection:'row',
    alignItems:'flex-end',
    justifyContent:'space-between',
    marginRight:10,
},
itemText:{
  marginLeft:10,
  marginTop:10,
  fontSize:20,
  fontWeight:'bold',
},
itemQuantityContainer:{
    flexDirection:'row',
},
itemTextBox:{
    width:'60%',
},
quantityTextBox:{
    flexGrow:1,

},
quantityBox:{
  paddingHorizontal: 10,
  paddingVertical: 10,
  height: 40,
  backgroundColor: 'rgb(255, 255, 255)',
  borderRadius: 5,
  margin: 10,
  width: '25%',
  borderWidth: 2,
  borderColor: 'pink',
},

});

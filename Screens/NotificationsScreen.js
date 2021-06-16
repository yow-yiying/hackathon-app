import React, { useState } from "react";
import { Text, View, Button, ScrollView, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import styles from "./style.js";
import Notification from "../Components/Notification.js";

function NotificationsScreen() {
  var text1 = "MEOWMEOW52 has fulfilled your request at 244 Ang Mo Kio Ave 3";
  var text2 = 'Kindness Corner near you at 44A Ang Mo Kio has closed';
  var text3 = 'Kindness Corner near you at 123 Light Vista has opened';
  var text4 = 'CHOCBREAD123 has fulfilled your item request at 158 Yio Chu Kang Ave 1';
  var text5 = 'WOOFWOOF888 has sent you a thank you note';

  const [notifList, setItemsArr] = useState([text1,text2,text3,text4, text5]);

    const deleteNotif = (index) => {
        let newArr = [...notifList];
        newArr.splice(index, 1);
        setItemsArr(newArr);
      };

  return (
    <View style = {{backgroundColor: 'white', flex: 1, padding: 5, paddingTop: 10}}>
    <ScrollView>
      {notifList.map((notif, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => deleteNotif(index)}>
                <Notification text={notif} />
              </TouchableOpacity>
            );
          })}
    </ScrollView>
    </View>
  );
}

const Stack = createStackNavigator();

export default function NotificationsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      {/* <Stack.Screen name = "HomeSecondScreen" component = {HomeSecondScreen} /> */}
    </Stack.Navigator>
  );
}

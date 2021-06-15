import React, { useState } from "react";
import { Text, View, Button, ScrollView, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import styles from "./style.js";
import Notification from "../Components/Notification.js";

function NotificationsScreen() {
  const text1 = 'Request fufilled by user MEOWMEOW';
  const text2 = 'Kindness Corner at Greendale Block 44A closed';
  const text3 = 'Kindness Corner at Light Vista Block 123 opened';
  const text4 = 'Your request was fufilled by user CHOCBREAD123';

  const [notifList, setItemsArr] = useState([text1,text2,text3,text4]);

    const deleteNotif = (index) => {
        let newArr = [...notifList];
        newArr.splice(index, 1);
        setItemsArr(newArr);
      };

  return (
    <ScrollView>
      {notifList.map((notif, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => deleteNotif(index)}>
                <Notification text={notif} />
              </TouchableOpacity>
            );
          })}
    </ScrollView>
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

import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function ItemInput() {
  return (
    <View style={styles.inputContainer}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardStyle}
      >
        <TextInput style={styles.itemBox} placeholder={"Item"} />
        <TextInput
          style={styles.quantityBox}
          placeholder={"Quantity"}
          keyboardType="numeric"
        />
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    margin: 10,
  },
  keyboardStyle: {   
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
  },
  itemBox: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    height: 40,
    backgroundColor: "rgb(255, 255, 255)",
    borderRadius: 5,
    margin: 10,
    borderWidth: 2,
    width: "60%",
    borderColor: "rgb(174, 182, 191)",
  },
  quantityBox: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    height: 40,
    backgroundColor: "rgb(255, 255, 255)",
    borderRadius: 5,
    margin: 10,
    width: "25%",
    borderWidth: 2,
    borderColor: "rgb(174, 182, 191)",
  },
});

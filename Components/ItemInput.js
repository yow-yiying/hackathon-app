import * as React from 'react';
import { Text, View, StyleSheet, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity } from 'react-native';

export default function ItemInput() {
  return (
    <View style={styles.inputContainer}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardStyle}>
        <TextInput
          style={styles.itemBox}
          placeholder={'Item'}
        />
        <TextInput
          style={styles.quantityBox}
          placeholder={'Quantity'}
          keyboardType = 'numeric'
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
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
   itemBox: {
    flex: 3,
    paddingHorizontal: 10,
    paddingVertical: 10,
    height: 40,
    backgroundColor: 'rgb(255, 255, 255)',
    borderRadius: 5,
    margin: 10,
    borderWidth: 2,
    borderColor: 'rgb(174, 182, 191)',
  },
  quantityBox:{
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    height: 40,
    backgroundColor: 'rgb(255, 255, 255)',
    borderRadius: 5,
    margin: 10,
    borderWidth: 2,
    borderColor: 'rgb(174, 182, 191)',
  },
});

import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { View, TouchableOpacity, StyleSheet, Alert, onPress, SafeAreaView, Text } from 'react-native';

export default function Button() {
    const pressHandler = (screenName) => {
        /* if (screenName=='detailsScreen'){ //if its the explore screen click listing
            Alert.alert('Save Changes',[
                {text: 'Confirm', onPress:()=> console.log('this should save changes'), style:'' },
                {text: 'Cancel', onPress:() =>console.log('this should revert to previous screen') , style:'cancel'},
            ])
        }
        else{ //if its the create new listing from upload screen
            Alert.alert('The listing cannot be deleted once created. Confirm?', [
                {text: 'Confirm', onPress:()=> console.log('this should save changes') },
                {text: 'Cancel', onPress:() =>console.log('this should revert to previous screen') , style:'cancel'},
            ])
        } */
    }
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={pressHandler} >
                <View style={styles.container}>
                    <View style={styles.confirmContainer}>
                        <Text style={styles.text}>Confirm</Text>
                        <MaterialIcons name="done" size={40} color="green" />
                    </View>
                </View>
            </TouchableOpacity>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    confirmContainer: {
        flexDirection: 'row-reverse',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'green',
        borderWidth: 5,
        borderRadius: 40,
        width: '80%',
        backgroundColor: 'lightgray',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'green',
    },
    container: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        flex: 1,
    }
})


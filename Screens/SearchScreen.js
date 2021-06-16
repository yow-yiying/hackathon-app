import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, StyleSheet, View, FlatList, TextInput, Image} from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { Entypo } from '@expo/vector-icons';

const App = () => {
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  
  const ItemView = ({ item }) => {
    return (
      <Text style={styles.itemStyle} onPress={() => getItem(item)}>
        {item.id}
        {'.'}
        {item.title.toUpperCase()}
      </Text>
    );
  };

  const ItemSeparatorView = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

  const getItem = (item) => {
    alert('Id : ' + item.id + ' Title : ' + item.title);
  };

  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <View style={styles.container}>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={(text) => searchFilterFunction(text)}
          value={search}
          underlineColorAndroid="transparent"
          placeholder="Search Here"
        />
        <FlatList
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
        />
      </View>
      <Text style = {styles.RecentSearchStyle}>Recent Searches:</Text> 
      <Text style = {styles.RecentSearchResultStyle}><Entypo name="back-in-time" size={24} color="#696969" /> Hand sanitizers</Text>
      <Text style = {styles.RecentSearchResultStyle}><Entypo name="back-in-time" size={24} color="#696969" /> Ang Mo Kio</Text>
      <Text style = {styles.RecentSearchResultStyle}><Entypo name="back-in-time" size={24} color="#696969" /> Chinatown Booth Blk 467</Text>
      <Text style = {styles.RecentSearchResultStyle}><Entypo name="back-in-time" size={24} color="#696969" /> Downtown Booth Blk 749</Text>
      <Text style = {styles.RecentSearchResultStyle}><Entypo name="back-in-time" size={24} color="#696969" /> Yio chu kang</Text>
      <Text style = {styles.RecentSearchResultStyle}><Entypo name="back-in-time" size={24} color="#696969" /> Farrer Park Booth MRT Exit A</Text>
      <Text style = {styles.RecentSearchResultStyle}><Entypo name="back-in-time" size={24} color="#696969" /> Geylang Booth Blk 43</Text>
      <Text style = {styles.RecentSearchResultStyle}><Entypo name="back-in-time" size={24} color="#696969" /> Holland Village Booth Blk 433</Text>
      <Text style = {styles.RecentSearchResultStyle}><Entypo name="back-in-time" size={24} color="#696969" /> Snack booth</Text>
      <Text style = {styles.RecentSearchResultStyle}><Entypo name="back-in-time" size={24} color="#696969" /> King Albert Park Booth MRT Exit A</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  itemStyle: {
    padding: 10,
  },
  textInputStyle: {
    height: 50,
    borderWidth: 2,
    paddingLeft: 20,
    borderRadius: 10,
    margin: 15,
    borderColor: '#c9184a',
    backgroundColor: '#FFFFFF',
  },
  RecentSearchStyle: {
    color: "black",
    paddingLeft: 20,
    paddingBottom: 10,
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 30
  },
  RecentSearchResultStyle:{
    color: "#696969",
    padding: 5,
    paddingLeft: 20,
    lineHeight: 30,
    fontSize: 18
  }
});

// export default App;

const Stack = createStackNavigator();

export default function SearchStack() {
    return (
    <Stack.Navigator>
        <Stack.Screen 
            name = "Explore" 
            component = {App} 
            options={{
                title: "Explore",
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

// export default App;
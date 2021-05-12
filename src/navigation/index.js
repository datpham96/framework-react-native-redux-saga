import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

function HomeScreen({navigation}) {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity onPress={() => navigation.navigate('Home1')}>
        <Text>Home1</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

function Home1Screen() {
  return (
    <SafeAreaView>
      <View>
        <Text>Home1Screen</Text>
      </View>
    </SafeAreaView>
  );
}

function Home2Screen() {
  return (
    <SafeAreaView>
      <View>
        <Text>Home2Screen</Text>
      </View>
    </SafeAreaView>
  );
}

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Home1" component={Home1Screen} />
        <Stack.Screen name="Home2" component={Home2Screen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
export default Navigation;

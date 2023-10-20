import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AllCategoryScreen from './src/screens/AllCategoryScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CategoryDetails from './src/screens/CategoryDetails';

const Stack = createStackNavigator();
const App = () => {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="AllCategories" component={AllCategoryScreen} />
          <Stack.Screen name="CategoryDetails" component={CategoryDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});

import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AllCategoryScreen from './src/screens/AllCategoryScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CategoryDetails from './src/screens/CategoryDetails';
import MealDetails from './src/screens/MealDetails';

const Stack = createStackNavigator();
const App = () => {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {backgroundColor: '#714209'},
            headerTintColor: 'white',
          }}>
          <Stack.Screen
            name="AllCategories"
            component={AllCategoryScreen}
            options={{title: 'Categories'}}
          />
          <Stack.Screen
            name="CategoryDetails"
            component={CategoryDetails}
            // options={{title: 'Meals Overview'}}
          />
          <Stack.Screen name="mealDetails" component={MealDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});

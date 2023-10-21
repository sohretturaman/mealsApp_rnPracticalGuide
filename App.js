import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AllCategoryScreen from './src/screens/AllCategoryScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CategoryDetails from './src/screens/CategoryDetails';
import MealDetails from './src/screens/MealDetails';
import {createDrawerNavigator} from '@react-navigation/drawer';
import FavouriteScreen from './src/screens/FavouriteScreen';
import CustomDrawer from './src/components/CustomDrawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerRouter = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerStyle: {backgroundColor: '#714209'},
        headerTintColor: 'white',
        drawerActiveTintColor: '#2E2319',
        drawerActiveBackgroundColor: '#C29A5D',
      }}>
      <Drawer.Screen
        name="CategoriesAll"
        component={AllCategoryScreen}
        options={{title: 'Categories'}}
      />
      <Drawer.Screen
        name="Favourites"
        component={FavouriteScreen}
        options={{
          drawerIcon: () => <Text style={{color: 'black'}}>#</Text>,
        }}
      />
    </Drawer.Navigator>
  );
};
const App = () => {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            headerStyle: {alignSelf: 'center'},
          }}>
          <Stack.Screen
            name="AllCategories"
            component={DrawerRouter}
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

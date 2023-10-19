import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AllCategoryScreen from './src/screens/AllCategoryScreen';

const App = () => {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <View>
        <Text>start page </Text>
        <AllCategoryScreen />
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});

import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import MealsComp from '../MealsComp';

const MealItem = ({MealsData}) => {
  // console.log('data in meals ıtem ', MealsData);

  const renderItem = funcItem => {
    const item = funcItem.item;
    const mealProps = {
      id: item.id,
      title: item.title,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
      imageUrl: item.imageUrl,
    };
    // console.log('meal props', mealProps.imageUrl);

    return (
      <View>
        <MealsComp {...mealProps} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList data={MealsData} renderItem={renderItem} />
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#482A15',
    flex: 1,
  },
});

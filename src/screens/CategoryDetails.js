import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {MEALS, CATEGORIES} from '../data/dummy-data';
import MealItem from '../components/meal/MealItem';

const CategoryDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const catId = route.params.categoryId;

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      categoryId => categoryId.id == catId,
    ).title;
    navigation.setOptions({title: categoryTitle});
  }, [navigation, catId]);

  //important , filter data according to id
  const MealsData = MEALS.filter(mealItem => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  return (
    <View style={styles.container}>
      <MealItem MealsData={MealsData} />
    </View>
  );
};
export default CategoryDetails;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#482A15',
    flex: 1,
  },
});

import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {MEALS, CATEGORIES} from '../data/dummy-data';
import MealsComp from '../components/MealsComp';

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

export default CategoryDetails;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#482A15',
    flex: 1,
  },
});

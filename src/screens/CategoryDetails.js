import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {MEALS} from '../data/dummy-data';
import MealsComp from '../components/MealsComp';

const CategoryDetails = () => {
  const route = useRoute();
  const catId = route.params.categoryId;

  //important , filter data according to id
  const MealsData = MEALS.filter(mealItem => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  const renderItem = funcItem => {
    const item = funcItem.item;
    const mealProps = {
      title: item.title,
      duration: item.duration,
      ingredients: item.ingredients,
      steps: item.steps,
      imageUrl: item.imageUrl,
    };
    console.log('meal props', mealProps.imageUrl);

    return (
      <View>
        <MealsComp {...mealProps} />
      </View>
    );
  };

  return (
    <View>
      <FlatList data={MealsData} renderItem={renderItem} />
    </View>
  );
};

export default CategoryDetails;

const styles = StyleSheet.create({});

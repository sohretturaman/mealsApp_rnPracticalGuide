import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useContext} from 'react';
import {MEALS} from '../data/dummy-data';
import {Context} from '../store/context/Contex';
import MealsComp from '../components/MealsComp';
import {useDispatch, useSelector} from 'react-redux';

const FavouriteScreen = () => {
  // const FavMealsCntxt = useContext(Context);
  const favMealIDS = useSelector(state => state.FavMeals.favIds); // my data array from redux
  // const favMeals = MEALS.filter(meal => FavMealsCntxt.ids.includes(meal.id));
  const favMeals = MEALS.filter(meal => favMealIDS.includes(meal.id));

  const renderItem = favMeal => {
    const data = favMeal.item;
    // console.log('fav meal in render item', favMeal.item.title);
    return <MealsComp {...data} />;
  };

  return (
    <View>
      <FlatList data={favMeals} renderItem={renderItem} />
    </View>
  );
};

export default FavouriteScreen;

const styles = StyleSheet.create({});

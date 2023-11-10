import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Pressable,
  Button,
} from 'react-native';
import React, {useContext, useEffect, useLayoutEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {MEALS} from '../data/dummy-data';
import ListComponent from '../components/ListComponent';
import {ScrollView} from 'react-native-virtualized-view';
import SubTitlesComp from '../components/SubTitlesComp';
import {useDispatch, useSelector} from 'react-redux';
//import {Context} from '../store/context/Contex';
import {AddToFav, DelFromFavs} from '../store/redux/FavsSlice';

const MealDetails = ({route, navigation}) => {
  // const FavMealsContex = useContext(Context);
  const mealId = route.params.mealId;
  const data = MEALS.find(item => item.id === mealId);

  // const isMealFav = FavMealsContex.ids.includes(mealId); //!! contexteki değerler yerine
  const FavouriteMealIds = useSelector(state => state.FavMeals.favIds);
  const isMealFav = FavouriteMealIds.includes(mealId);

  const dispatch = useDispatch();

  const ChangeFavStatus = () => {
    if (isMealFav) {
      //FavMealsContex.DelFalMeal(mealId);
      dispatch(DelFromFavs({id: mealId}));
    }
    if (!isMealFav) {
      //FavMealsContex.AddFavMeal(mealId);
      dispatch(AddToFav({id: mealId}));
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          title={isMealFav === true ? 'faved' : 'notFav'}
          color="black"
          style={{margin: 10}}
          onPress={ChangeFavStatus}
        />
      ),
    });
  }, [navigation, ChangeFavStatus]); //'!!! very important when you update the function here the fav icon is working properly

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Image source={{uri: data.imageUrl}} style={styles.imageStyle} />

          <SubTitlesComp
            complexity={data.complexity}
            affordability={data.affordability}
            duration={data.duration}
            style={styles.subtitleColor}
          />
        </View>

        <Text style={styles.title}>{data.title}</Text>

        <View style={styles.contentWrapper}>
          <Text style={styles.subtitle}>INGREDIENTS</Text>
          <ListComponent data={data.ingredients} />
        </View>

        <View style={styles.contentWrapper}>
          <Text style={styles.subtitle}>STEPS</Text>
          <ListComponent data={data.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  imageStyle: {
    height: 200,
    width: '100%',
    padding: 5,
    marginBottom: 5,
    resizeMode: 'cover',
  },
  container: {
    backgroundColor: '#482A15',
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
    padding: 5,
    margin: 5,
  },
  subtitle: {
    fontSize: 15,
    color: 'white',
    fontWeight: '500',
    padding: 10,
  },
  contentWrapper: {
    justifyContent: 'center',
    alignContent: 'center',
    marginHorizontal: 10,
  },
  subtitleColor: {
    color: 'white',
  },
});

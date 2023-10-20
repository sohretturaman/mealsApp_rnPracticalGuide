import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {MEALS} from '../data/dummy-data';
import ListComponent from '../components/ListComponent';
import {ScrollView} from 'react-native-virtualized-view';

const MealDetails = () => {
  const route = useRoute();
  const mealId = route.params.mealId;

  const data = MEALS.find(item => item.id === mealId);
  // console.log('data from meals', data.ingredients);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Image source={{uri: data.imageUrl}} style={styles.imageStyle} />
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
});

import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const MealsComp = props => {
  console.log('image', props.imageUrl);
  return (
    <View>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.duration}>{props.duration} min </Text>
      </View>
      <View style={styles.imageWrapper}>
        <Image source={{uri: props.imageUrl}} style={styles.imageStyle} />
      </View>
      <View>
        <Text style={styles.ingredientsTitle}>INGREDIENTS</Text>
        <Text>{props.ingredients} </Text>
        <Text>{props.steps}</Text>
      </View>
    </View>
  );
};

export default MealsComp;

const styles = StyleSheet.create({
  imageStyle: {
    height: 150,
    width: '100%',
    padding: 2,
    margin: 2,
  },
  titleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  title: {
    fontSize: 20,
    color: '#65451F',
    padding: 5,
    fontWeight: '500',
  },
  duration: {
    fontSize: 17,
    color: '#65451F',
    margin: 5,
    fontWeight: '500',
    alignContent: 'center',
    alignItems: 'center',
  },
  ingredientsTitle: {
    fontSize: 16,
    color: '#65451F',
    padding: 5,
  },
});

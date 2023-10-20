import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import SubTitlesComp from './SubTitlesComp';

const MealsComp = props => {
  // console.log('image', props.imageUrl);

  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate('mealDetails', {mealId: props.id});
  };
  return (
    <View style={styles.container}>
      <Pressable
        style={({pressed}) => (pressed ? styles.pressed : null)}
        onPress={handlePress}>
        <View style={styles.imageWrapper}>
          <Image source={{uri: props.imageUrl}} style={styles.imageStyle} />
        </View>
        <View>
          <Text style={styles.title}>{props.title}</Text>
        </View>
        <SubTitlesComp {...props} />
      </Pressable>
    </View>
  );
};

export default MealsComp;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 0.5,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {height: 2, width: 0},
    backgroundColor: 'white',
  },
  imageStyle: {
    height: 150,
    overflow: 'hidden',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },

  title: {
    fontSize: 18,
    color: '#65451F',
    padding: 5,
    fontWeight: '500',
    alignSelf: 'center',
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
    alignSelf: 'center',
  },
  content: {
    fontSize: 15,
    fontWeight: '500',
  },
  pressed: {
    opacity: 0.5,
  },
});

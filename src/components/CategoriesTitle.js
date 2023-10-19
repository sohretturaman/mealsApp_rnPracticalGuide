import {Pressable, StyleSheet, Text, View, Platform} from 'react-native';
import React from 'react';

const CategoriesTitle = ({item, color}) => {
  return (
    <View style={[styles.titleContainer, {backgroundColor: color}]}>
      <Pressable
        android_ripple={{color: '#ccc'}}
        style={({pressed}) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}>
        <View style={styles.itemWrapper}>
          <Text style={styles.text}>{item}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoriesTitle;

const styles = StyleSheet.create({
  titleContainer: {
    margin: 16,
    flex: 1,
    height: 150,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {height: 2, width: 2},
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  button: {flex: 1},
  buttonPressed: {
    opacity: 0.5,
  },

  itemWrapper: {
    padding: 16,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: 16,
    fontWeight: '500',
  },
});

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const SubTitlesComp = ({complexity, affordability, duration, style}) => {
  return (
    <View style={styles.subTitleWrapper}>
      <Text style={[styles.subtitle, style]}>{complexity} </Text>
      <Text style={[styles.subtitle, style]}>{affordability}</Text>
      <Text style={[styles.subtitle, style]}>{duration} min </Text>
    </View>
  );
};

export default SubTitlesComp;

const styles = StyleSheet.create({
  subTitleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flex: 1,
    padding: 10,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '500',
    color: 'black',
    marginHorizontal: 2,
  },
});

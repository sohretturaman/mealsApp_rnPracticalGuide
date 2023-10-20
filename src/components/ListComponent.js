import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';

const ListComponent = ({data}) => {
  const renderItem = ({item}) => {
    return (
      <View style={styles.itemWrapper}>
        <Text style={styles.itemTitle}>{item}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item}
      />
    </View>
  );
};

export default ListComponent;

const styles = StyleSheet.create({
  itemWrapper: {
    backgroundColor: '#DDB075',
    margin: 5,
    width: '90%',
    minWidth: '80%',
    borderRadius: 10,
    padding: 5,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  itemTitle: {
    fontSize: 15,
    fontWeight: '400',
    color: 'black',
  },
});

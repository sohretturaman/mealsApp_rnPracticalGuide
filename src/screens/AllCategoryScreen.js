import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CategoriesTitle from '../components/CategoriesTitle';
import {CATEGORIES} from '../data/dummy-data';

function AllCategoryScreen() {
  const [key, setKey] = useState('1');

  const renderItemFunc = renderItem => {
    return (
      <View style={{flex: 1}}>
        <CategoriesTitle
          item={renderItem.item.title}
          color={renderItem.item.color}
        />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Text>AllCategoryScreen</Text>
      <View style={styles.itemContiner}>
        <FlatList
          key={key}
          data={CATEGORIES}
          keyExtractor={item => item.id}
          renderItem={renderItemFunc}
          horizontal={false}
          numColumns={2}
        />
      </View>
    </View>
  );
}

export default AllCategoryScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#24180f',
  },
});

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

const CustomDrawer = props => {
  return (
    <View style={styles.drawerContainer}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{
          backgroundColor: '#54300F',
        }}>
        <View style={styles.profileWrapper}>
          {/**profile part  */}
          <Text style={styles.userName}>Meryem Şöhret</Text>
        </View>

        <Text style={{fontSize: 16, fontWeight: 'bold', color: '#EAE8F1'}}>
          {' '}
          Screens{' '}
        </Text>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F5F2EC',
    marginLeft: 10,
    paddingVertical: 40,
  },
  drawerContainer: {flex: 1, backgroundColor: '#54300F'},
  profileWrapper: {
    marginBottom: 15,
    backgroundColor: '#54300F',
    borderRadius: 10,
  },
});

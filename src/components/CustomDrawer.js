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
          backgroundColor: '#7B400C',
        }}>
        <View style={styles.profileWrapper}>
          {/**profile part  */}
          <Text style={styles.userName}>Şöhret Turaman</Text>
        </View>

        <Text style={{fontSize: 16, fontWeight: 'bold', color: '#C29A5D'}}>
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
    color: '#352B1D',
    marginLeft: 10,
    paddingVertical: 40,
  },
  drawerContainer: {flex: 1, backgroundColor: '#7B400C'},
  profileWrapper: {
    marginBottom: 15,
    backgroundColor: '#C29A5D',
    borderRadius: 10,
  },
});

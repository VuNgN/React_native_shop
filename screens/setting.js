import React, { useState, useContext } from 'react';
import { MyContext } from '../components/context/appContext';
import { View, Text, FlatList, StatusBar, Switch, StyleSheet } from 'react-native';
import SettingListItem from '../components/settingListItem';
import Settings from '../data/settings';

export default function setting() {
  const { isDarkMode } = useContext( MyContext );
  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#000' : '#fff' }]}>
      <View>
        <FlatList 
        data= {Settings}
        renderItem={({ item, index }) => <SettingListItem name={item.name} key={index} />}
        keyExtractor={(item, index) => `${index}`}
        contentContainerStyle={styles.scrollView}
      />
      <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    paddingLeft: 20,
    paddingRight: 20,
  },
  scrollView: {
    paddingTop: 10,
  }
});

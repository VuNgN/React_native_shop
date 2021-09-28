import React, { useContext } from 'react';
import { MyContext } from './context/appContext';
import { View, Text, Switch, TouchableOpacity, StyleSheet } from 'react-native';

export default function SettingListItem({ name }) {
  const { isDarkMode, toggleSwitch } = useContext( MyContext );
  return (
    <TouchableOpacity TouchableOpacity={0.9} onPress={toggleSwitch}>
      <View style={[styles.view, {
                backgroundColor: isDarkMode ? '#000' : '#fff',
                borderBottomColor: isDarkMode ? '#fff' : '#000',
              }]}>
        <Text style={[styles.text, { color: isDarkMode ? '#fff' : '#000' }]}>{name}</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isDarkMode}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: '700',
    marginRight: 'auto',
  },
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 4,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    marginBottom: 16,
  },
});

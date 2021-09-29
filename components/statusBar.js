import React, { useContext } from 'react';
import { MyContext } from './context/appContext';
import { StatusBar } from 'react-native';

export default () => {
  const { isDarkMode } = useContext( MyContext );
  return <StatusBar 
            backgroundColor={ isDarkMode ? "#000" : "#fff"} 
            barStyle={isDarkMode ? "light-content" : "dark-content"} 
          />
}
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './AppNavigator';
import { MyProviderConText } from './components/context/appContext';
import StatusBar from './components/statusBar';


export default function App() {
  return (
    <MyProviderConText>
      <StatusBar />
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </MyProviderConText>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  scrollView: {
    paddingLeft: 20,
    paddingRight: 20,
  },
});

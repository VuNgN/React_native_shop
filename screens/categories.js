import React, { useContext } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import CategoryListItem from '../components/CategoryListItem';
import listCategory from '../data/categories';
import { MyContext } from '../components/context/appContext';
import StatusBar from '../components/statusBar';

export default function Categories({navigation}) {
  const { isDarkMode } = useContext( MyContext );
  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#000' : '#fff' }]}>
      <FlatList 
        data= {listCategory}
        renderItem={({ item, index }) => 
          <CategoryListItem 
          text={item.text} 
          img={item.img}
          onPress={() => navigation.navigate('category', {
            categoryName: item.text,
            categoryId: item.id,
          })} 
          key={index} 
          />}
        keyExtractor={(item, index) => `${index}`}
        contentContainerStyle={styles.scrollView}
      />
      <StatusBar />
    </View>
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
    paddingBottom: 50,
  },
  scrollView: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  }
});

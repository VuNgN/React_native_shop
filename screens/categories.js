import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, ScrollView, FlatList } from 'react-native';
import CategoryListItem from '../components/CategoryListItem';
import listCategory from '../data/categories';

export default function Categories({navigation}) {
  return (
    <View style={styles.container}>
      {/* <ScrollView contentContainerStyle={styles.scrollView}>
        {listCategory.map((category, index) => <CategoryListItem text={category.text} img={category.img} key={index} />)}
      </ScrollView> */}
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
      <StatusBar style="auto" />
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
  },
  scrollView: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  }
});

import React from 'react';
import { StyleSheet, View, FlatList, StatusBar } from 'react-native';
import ProductListItem from '../components/ProductListItem';
import productList from '../data/product/productListItem';


export default function Category({ navigation, route }) {
  const { categoryName, categoryId } = route.params;
  React.useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: categoryName });
  }, [navigation, route]);

  return (
    <View style={styles.container}>
      <FlatList 
        data={productList.products.filter((item) => item.category === categoryId)}
        renderItem={({ item, index }) => <View style={styles.wrapper}><ProductListItem product={item} key={index} /></View>}
        keyExtractor={(item, index) => `${index}`}
        numColumns={2}
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
  wrapper: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },
  scrollView: {
    paddingTop: 20,
  }
});

import React, { useContext } from 'react';
import { MyContext } from '../components/context/appContext';
import { StyleSheet, View, FlatList } from 'react-native';
import ProductListItem from '../components/ProductListItem';
import productList from '../data/product/productListItem';
import StatusBar from '../components/statusBar';


export default function Category({ navigation, route }) {
  const { isDarkMode } = useContext( MyContext );
  const { categoryName, categoryId } = route.params;
  React.useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: categoryName });
  }, [navigation, route]);

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#000' : '#fff' }]}>
      <FlatList 
        data={productList.products.filter((item) => item.category === categoryId)}
        renderItem={({ item, index }) => 
            <View style={styles.wrapper}>
                <ProductListItem product={item} key={index} />
            </View>}
        keyExtractor={(item, index) => `${index}`}
        numColumns={2}
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
  },
  wrapper: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 50,
  },
  scrollView: {
    paddingTop: 20,
  }
});

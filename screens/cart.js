import React, { useContext } from 'react';
import { MyContext } from '../components/context/appContext';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import CartListItem from '../components/CartListItem';
import StatusBar from '../components/statusBar';

export default function cart() {
  const { cart, addToCart, removeToCart, addQuanityCart, isDarkMode } = useContext(
    MyContext
  );
  if (cart.length > 0) {
    return (
      <View style={[styles.container, { backgroundColor: isDarkMode ? '#000' : '#fff' }]}>
        <FlatList
          data={cart}
          renderItem={({ item, index }) => (
            <CartListItem
              product={item}
              addToCart={addToCart}
              removeToCart={removeToCart}
              addQuanityCart={addQuanityCart}
              key={item.id || index}
            />
          )}
          keyExtractor={(item, index) => `${item.id || index}`}
          style={styles.scrollContainer}
        />
        <StatusBar />
      </View>
    );
  } else {
    return (
      <View style={[styles.containerEmpty, { backgroundColor: isDarkMode ? '#000' : '#fff' }]}>
        <Image
          style={styles.emptyCartImage}
          source={require('../assets/empty-cart.png')}
        />
        <Text style={styles.emptyCartText}>Your cart is empty</Text>
        <StatusBar />
      </View>
    );
  }
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
  containerEmpty: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  scrollContainer: {
    paddingTop: 10,
  },
  emptyCartImage: {
    width: 200,
    height: 200,
    marginRight: 30,
    marginBottom: 20,
  },
  emptyCartText: {
    fontSize: 30,
    fontWeight: '500',
    color: '#00B3C3',
  },
});

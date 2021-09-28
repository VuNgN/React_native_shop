import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { MyContext } from './context/appContext';
import convertMoney from './config/priceConfig';

export default function ProductListItem({ product }) {
    const { addToCart, isDarkMode } = useContext(MyContext); 
    return (
        <View style={[styles.shadowOffset, 
              {
                backgroundColor: isDarkMode ? '#000' : '#fff',
                borderColor: isDarkMode ? '#fff' : 'none',
                borderWidth: isDarkMode ? 1 : 0,
              }]}>
            <View style={styles.container}>
                <Image
                    style={styles.imageProduct}
                    source={{
                        uri: product.img,
                    }}
                />
                <View style={styles.content}>
                    <Text style={[styles.title, { color: isDarkMode ? '#fff' : '#000' }]}>
                        {product.name}
                    </Text>
                    <View style={styles.priceRow}>
                        <Text style={styles.price}>{convertMoney(product.price)}</Text>
                        <TouchableOpacity
                            onPress={() => addToCart(product)}
                        >
                            <Text style={styles.buy}>BUY +</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    shadowOffset: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 2,
        marginBottom: 10,
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        borderRadius: 4,
        alignItems: 'center',
    },
    imageProduct: {
        marginTop: 10,
        height: 150,
        width: '100%',
    },
    content: {
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
        marginVertical: 10,
    },
    priceRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        width: '100%',
    },
    price: {
        color: '#EE532D',
        marginLeft: 10,
        marginRight: 'auto',
        fontSize: 15,
        fontWeight: '500',
        flex: 2,
    },
    buy: {
        color: '#29A6F7',
        fontSize: 20,
        fontWeight: '500',
        marginRight: 10,

    }
});


import React, { useContext } from 'react';
import { MyContext } from './context/appContext';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import convertMoney from './config/priceConfig';

export default function CartListItem({ product, addToCart, removeToCart, addQuanityCart }) {
    const { isDarkMode } = useContext( MyContext );
    return (
        <TouchableOpacity
            activeOpacity={0.9}
        >
            <View style={[styles.container, {
                backgroundColor: isDarkMode ? '#000' : '#fff',
                borderColor: isDarkMode ? '#fff' : 'none',
                borderWidth: isDarkMode ? 1 : 0,
              }]}>
                <View style={styles.imageView}>
                    <Image
                        resizeMode='cover'
                        style={styles.image}
                        source={{
                            uri: product.img
                        }}
                    ></Image>
                </View>
                <View style={styles.body}>
                    <View style={styles.content}>
                        <Text style={[styles.name, { color: isDarkMode ? '#fff' : '#000' }]}>
                            {product.name}
                        </Text>
                        <Text style={styles.price}>{convertMoney(product.price)}</Text>
                    </View>
                    <View style={styles.footer}>
                        <TouchableOpacity
                            activeOpacity={0.5}
                            onPress={() => removeToCart(product)}
                        >
                            <View style={[styles.quantityBtn, {
                                          borderColor: isDarkMode ? '#fff' : 'none',
                                          borderWidth: isDarkMode ? 1 : 0,
                                        }]}
                            >
                                <Icon name="minus" size={15} color="#fff" />
                            </View>
                        </TouchableOpacity>
                        <Text style={[styles.quantity, 
                        { color: isDarkMode ? '#fff' : '#000' }]}>
                            {product.quantity}
                        </Text>
                        <TouchableOpacity
                            TouchableOpacity={0.5}
                            onPress={() => addQuanityCart(product)}
                        >
                            <View style={[styles.quantityBtn, {
                                          borderColor: isDarkMode ? '#fff' : '#none',
                                          borderWidth: isDarkMode ? 1 : 0,
                                        }]}
                            >
                                <Icon name="plus" size={15} color="#fff" />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        flexDirection: 'row',
        marginVertical: 10,
        marginHorizontal: 10,
    },
    imageView: {
        height: 100,
        width: 100,
        margin: 10,
        borderRadius: 3,
        borderColor: '#E3E3E3',
        borderWidth: 1,
        alignItems: 'center',
        overflow: 'hidden',
    },
    image: {
        height: 100,
        width: 150,
    },
    body: {
        marginLeft: 0,
        width: '100%',
    },
    content: {
        flex: 1,
    },
    name: {
        fontSize: 20,
        fontWeight: '500',
        marginTop: 10,
        marginBottom: 5,
    },
    price: {
        fontSize: 15,
        color: '#12C9A0'
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '60%'
    },
    quantityBtn: {
        flex: 1,
        backgroundColor: '#000',
        paddingHorizontal: 30,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginVertical: 10,
    },
    quantity: {
        flex: 2,
        textAlign: 'center',
        fontSize: 25,
    }
});

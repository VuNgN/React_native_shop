import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import CartListItem from '../components/CartListItem';

const carts = [
    {
        id: 1,
        img: 'https://cdn.webshopapp.com/shops/212063/files/341714241/650x650x2/nitro-snowboard-team-exposure.jpg',
        name: 'Snow board 1',
        price: '5000000',
        category: 1,
        quantity: 1,

    },
    {
        name: 'avc 2',
    }
];

export default function cart() {
    return (
        <View style={styles.container}>
            <FlatList
                data={carts}
                renderItem={({ item, index }) =>
                    <CartListItem product={item} />
                }
                keyExtractor={(item, index) => { `${index}` }}
                style={styles.scrollContainer}
            />
        </View>
    )
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
    scrollContainer: {}
})
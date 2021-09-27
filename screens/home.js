import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SvgCart from './svg/home/SvgCart';

export default function orders() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome.</Text>
            <Text style={styles.desc}>Let's shopping now</Text>
            <View style={styles.icon}>
                <SvgCart />
            </View>
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
    title: {
        /* Welcome. */
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 36,
        lineHeight: 50,
        color: '#000000',
        paddingTop: 100,
    },
    desc: {
        /* Let's shopping now */
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 18,
        lineHeight: 25,
        color: '#000000',
        marginTop: 5,
    },
    icon: {
        bottom: -70,
    }
})
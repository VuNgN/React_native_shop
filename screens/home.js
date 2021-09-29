import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MyContext } from '../components/context/appContext';
import SvgCart from './svg/home/SvgCart';
import StatusBar from '../components/statusBar';

export default function orders() {
    const { isDarkMode } = useContext(MyContext);
    return (
        <View style={[styles.container, { backgroundColor: isDarkMode ? '#000' : '#fff'}]}>
            <Text style={[
                styles.title, 
                { color: isDarkMode ? '#fff' : '#000'}
              ]}>Welcome.</Text>
            <Text style={[
                styles.desc, 
                { color: isDarkMode ? '#fff' : '#000'}
              ]}>Let's shopping now</Text>
            <View style={styles.icon}>
                <SvgCart />
            </View>
            <StatusBar />
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
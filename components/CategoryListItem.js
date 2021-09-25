import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

export default function CategoryListItem({ text, img, onPress }) {
    return (
        <TouchableOpacity 
            TouchableOpacity={0.9}
            onPress={onPress}
        >
            <View style={styles.view}>
                <Text style={styles.text}>
                    { text }
                </Text>
                <Image style={styles.image} source={ img } />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    image: {
        marginVertical: 10,
        width: 64, 
        height: 64,
    },
    text: {
        fontWeight: '700',
    },
    view: {
        padding: 16,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: {width: 0, height: 0},
        marginBottom: 16,
        elevation: 2,
    },
});

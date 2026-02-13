import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MainScreen = () => {
    return (
        <View style={styles.container}>
           <Text style={styles.textstyle}>This is Main screen</Text>
        </View>
);
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    textstyle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default MainScreen;
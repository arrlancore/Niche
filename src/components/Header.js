import React from 'react';
import { View, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Header = () => {
    return (
        <View style={styles.container}>
            <MaterialIcons name='sort' size={28} color='black' />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 50,
        paddingHorizontal: 30,
        justifyContent: 'center'
    }
});

export default Header;

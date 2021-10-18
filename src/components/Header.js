import React from 'react';
import { View, StyleSheet } from 'react-native';
import MenuBar from '../../assets/menu-bar.svg';

const Header = () => {
    return (
        <View style={styles.container}>
            <MenuBar height={35} width={35} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 50,
        paddingHorizontal: 24,
        justifyContent: 'center',
    }
});

export default Header;

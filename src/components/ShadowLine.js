import React from 'react';
import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const colors = ["rgba(0, 0, 0, 0.1)", "#ffffff00"];

const ShadowLine = () => {
    return (
        <LinearGradient
            colors={colors}
            style={styles.gradient} />
    );
};

const styles = StyleSheet.create({
    gradient: {
        position: 'absolute',
        top: 0,
        height: 6,
        width: '100%'
    }
});

export default ShadowLine;

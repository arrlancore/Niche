import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CardTitle = ({ title }) => {
    return (
        <Text style={styles.title}>{title}</Text>
    );
};

const Section = ({
    children,
    title
}) => {
    return (
        <View style={styles.container}>
            <CardTitle title={title} />
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
    },
    title: {
        fontSize: 20,
        fontWeight: '600'
    }
});

export default Section;

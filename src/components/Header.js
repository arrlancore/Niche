import React from 'react';
import { View, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import MenuBar from '../../assets/menu-bar.svg';
import BackIcon from '../../assets/arrow-left.svg';
// import Animated from 'react-native-reanimated';

const HeaderIcon = {
    'home': <MenuBar height={25} width={25} fill='#000' />,
    'job': <BackIcon height={25} width={25} fill='#000' />
};

const Header = (props) => {
    const { route, navigation, back, progress } = props;

    const pressed = () => {
        if (back) navigation.pop();
    };

    const Icon = HeaderIcon[route.name];

    const opacity = Animated.add(progress.current, progress.next || 0).interpolate({
        inputRange: [0, 1, 2],
        outputRange: [0, 1, 0],
    });

    return (
        <Animated.View style={[styles.container, { opacity }]}>
            <TouchableOpacity onPress={pressed}>
                {Icon}
            </TouchableOpacity>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 50,
        paddingHorizontal: 28,
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#fff'
    },
});

export default Header;

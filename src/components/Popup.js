import React, { useEffect } from 'react';
import {
    StyleSheet,
    Text,
    Dimensions
} from 'react-native';
import Animated from 'react-native-reanimated';
import usePopupAnimate from '../hooks/usePopupAnimate';
import { POPUP_HEIGHT } from '../utils';

const SCR_WIDTH = Dimensions.get('window').width;

const Popup = ({
    visible,
    title,
    description,
    // height,
    extraOffset = 18,
    surface = '#000',
    zIndex = 0,
    textColor = '#fff',
}) => {



    const { show, animate } = usePopupAnimate({ to: extraOffset });

    useEffect(() => {
        if (visible) show();
    }, [visible]);

    const bgColorStyle = {
        backgroundColor: surface,
        zIndex
    };

    const textStyle = {
        color: textColor
    };

    return (
        <Animated.View style={[
            styles.container,
            bgColorStyle,
            animate]}>
            <Text style={[styles.title, textStyle]}>{title}</Text>
            <Text style={[styles.description, textStyle]}>{description}</Text>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        height: POPUP_HEIGHT,
        width: SCR_WIDTH,
        borderTopLeftRadius: 28,
        borderTopRightRadius: 28,
        // borderRadius: 22,
        padding: 30,
    },
    title: {
        color: '#fff'
    },
    description: {
        color: '#fff'
    }
});

export default Popup;

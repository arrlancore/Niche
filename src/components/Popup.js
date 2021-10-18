import React, { useEffect } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import Animated from 'react-native-reanimated';
import usePopupAnimate from '../hooks/usePopupAnimate';
import { POPUP_HEIGHT } from '../utils';

const SCR_WIDTH = Dimensions.get('window').width;

const Popup = ({
    visible,
    title,
    description,
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
            <View style={styles.innerContainer}>
                <View style={styles.flexOne}>
                    <Text style={[styles.title, textStyle]}>{title}</Text>
                    <Text style={[styles.description, textStyle]}>{description}</Text>
                </View>

                <TouchableOpacity>
                    <Text>BUTTON</Text>
                </TouchableOpacity>
            </View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    flexOne: {
        flex: 1,
    },
    container: {
        position: 'absolute',
        bottom: 0,
        height: POPUP_HEIGHT,
        width: SCR_WIDTH,
        borderTopLeftRadius: 28,
        borderTopRightRadius: 28,
        padding: 30,
    },
    innerContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        fontSize: 16,
        fontWeight: '500'
    },
    description: {
        fontSize: 12,
        marginTop: 6
    }
});

export default Popup;

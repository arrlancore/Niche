import React from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Animated,
    Image
} from 'react-native';
import BackIcon from '../../assets/arrow-left.svg';
import Jobee from '../../assets/jobee.svg';
import MoreIcon from '../../assets/more.svg';
import { theme } from '../theme';
import { elevation_3, elevation_4 } from '../utils';

const HeaderIcon = {
    'home': <Jobee width={64} />,
    'job': <BackIcon height={25} width={25} fill={theme.icon_main} />
};

const Header = (props) => {
    const { route, navigation, back, progress } = props;

    const isHomePage = route.name === 'home';

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

            {isHomePage && (
                <View style={styles.rightIconContainer}>
                    <Image source={require('../../assets/image4.jpeg')} style={styles.profileImg} />
                </View>
            )}

            {!isHomePage && (
                <MoreIcon fill={theme.icon_main} height={28} width={28} />
            )}
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 50,
        paddingLeft: 28,
        paddingRight: 25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff'
    },
    flexOne: {
        flex: 1
    },
    profileImg: {
        height: 32,
        width: 32,
        resizeMode: 'cover',
        borderRadius: 99,
    },
    rightIconContainer: {
        borderWidth: 1,
        borderColor: theme.border,
        borderRadius: 99,
        padding: 2,
        ...elevation_3,
    },
    logo: {
        ...elevation_4
    }
});

export default Header;

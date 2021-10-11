import { Platform } from 'react-native';

export const elevation_1 = {
    ...Platform.select({
        ios: {
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.18,
            shadowRadius: 1.0,
        },
        android: {
            elevation: 1,
        }
    })
};

export const elevation_2 = {
    ...Platform.select({
        ios: {
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.2,
            shadowRadius: 1.41,
        },
        android: {
            elevation: 2,
        }
    })
};

export const elevation_3 = {
    ...Platform.select({
        ios: {
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,
        },
        android: {
            elevation: 3,
        }
    })
};

export const elevation_6 = {
    ...Platform.select({
        ios: {
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,
        },
        android: {
            elevation: 6,
        }
    })
};
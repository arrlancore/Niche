import React from 'react';
import {
    SafeAreaView,
    StatusBar,
    StyleSheet
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

import Home from './home';
import Job from './job';
import Header from './components/Header';

const Stack = createStackNavigator();

const HomeScreenOptions = {
    headerMode: 'float',
    title: null,
    header: (props) => (<Header {...props} />),
    headerShadowVisible: false,
};

const JobScreenOptions = {
    headerMode: 'float',
    title: null,
    header: (props) => (<Header {...props} />),
    headerShadowVisible: false,
};

const App = gestureHandlerRootHOC(() => {

    return (
        <SafeAreaView style={styles.flexOne}>
            <StatusBar barStyle='dark-content' />

            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="home"
                        component={Home}
                        options={HomeScreenOptions}
                    />
                    <Stack.Screen
                        name='job'
                        component={Job}
                        options={JobScreenOptions}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
});

const styles = StyleSheet.create({
    flexOne: {
        flex: 1
    }
});

export default App;
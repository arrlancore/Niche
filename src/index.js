import React from 'react';
import {
    SafeAreaView,
    StatusBar,
    StyleSheet
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

import Home from './home';
import Job from './job';
import Header from './components/Header';

const Stack = createNativeStackNavigator();

const App = gestureHandlerRootHOC(() => {

    return (
        <SafeAreaView style={styles.flexOne}>
            <StatusBar barStyle='dark-content' />

            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{
                            title: null,
                            header: () => (<Header />),
                            headerShadowVisible: false,
                        }}
                    />
                    <Stack.Screen
                        name='Job'
                        component={Job}
                        options={{
                            title: null,
                            header: () => (<Header />),
                            headerShadowVisible: false
                        }}
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
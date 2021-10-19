import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView
} from 'react-native';

import { theme } from '../theme';
import SearchIcon from '../../assets/search.svg';
import FilterIcon from '../../assets/filter.svg';

import JobsMatched from './JobsMatched';
import { elevation_1 } from '../utils';
import Section from './Section';
import Categories from './Categories';

const FilterButton = () => {
    return (
        <TouchableOpacity style={styles.filter}>
            <FilterIcon height={20} width={20} fill={theme.icon_main} />
        </TouchableOpacity>
    );
};

const Input = () => {
    return (
        <View style={styles.inputContainer}>
            <SearchIcon stroke={theme.icon_main} height={20} width={20} />
            <TextInput
                placeholder='Search for jobs'
                placeholderTextColor={theme.text_placeholder}
                style={{
                    flex: 1,
                    height: 48,
                    backgroundColor: theme.input,
                    paddingHorizontal: 10,
                    color: theme.text_main
                }}
            />
            <FilterButton />
        </View>
    );
};

const Home = () => {
    return (
        <ScrollView style={styles.outerContainer} contentContainerStyle={styles.container}>
            <Text style={styles.title}>
                Find the World's most{'\n'}
                <Text style={{ fontWeight: '700' }}>Amazing Jobs</Text>
            </Text>

            <Input />

            <Section title='Jobs Matched'>
                <JobsMatched />
            </Section>

            <Section title='Categories'>
                <Categories />
            </Section>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    outerContainer: {
        flexGrow: 1,
        backgroundColor: '#fff',
    },
    container: {
        flexGrow: 1,
        paddingTop: 20,
        paddingBottom: 30,
        paddingHorizontal: 30,
    },
    title: {
        fontSize: 26,
        fontWeight: '400',
        color: theme.text_main
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: theme.input,
        paddingLeft: 16,
        paddingRight: 12,
        borderRadius: 10,
        marginTop: 28,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: theme.border
    },
    filter: {
        backgroundColor: '#fff',
        padding: 6,
        borderRadius: 10,
        ...elevation_1
    }
});

export default Home;
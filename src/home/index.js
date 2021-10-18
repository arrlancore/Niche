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
import Search from '../../assets/search.svg';
import Filter from '../../assets/filter2.svg';

import JobMatchedCard from './JobMatchedCard';
import CategoryCard from './CategoryCard';
import { elevation_1 } from '../utils';

const FilterButton = () => {
    return (
        <TouchableOpacity style={styles.filter}>
            <Filter height={20} width={20} />
        </TouchableOpacity>
    );
};

const Input = () => {
    return (
        <View style={styles.inputContainer}>
            <Search style={{ color: '#000' }} height={20} width={20} />
            <TextInput
                placeholder='Search for jobs'
                style={{
                    flex: 1,
                    height: 48,
                    backgroundColor: theme.input,
                    paddingHorizontal: 10,
                }}
            />
            <FilterButton />
        </View>
    );
};

const CardTitle = ({ title }) => {
    return (
        <Text style={styles.subTitle}>{title}</Text>
    );
};

const JobCategoryCard = () => {
    return (
        <View style={styles.subContainer}>
            <CardTitle title='Job Category' />
            <CategoryCard />
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

            <JobMatchedCard />

            <JobCategoryCard />
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
        fontWeight: '400'
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: theme.input,
        paddingHorizontal: 16,
        borderRadius: 10,
        marginTop: 28,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: theme.border
    },
    subContainer: {
        marginTop: 28,
    },
    subTitle: {
        fontSize: 22,
        fontWeight: '600'
    },
    filter: {
        backgroundColor: '#fff',
        padding: 8,
        borderRadius: 10,
        ...elevation_1
    }
});

export default Home;
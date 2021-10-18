import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';

import { theme } from '../theme';
import Search from '../../assets/search.svg';
import Filter from '../../assets/filter2.svg';

import JobMatchedCard from './JobMatchedCard';
import CategoryCard from './CategoryCard';

const FilterButton = () => {
    return (
        <TouchableOpacity style={styles.filter}>
            <Filter height={23} width={23} />
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
        <View style={styles.container}>
            <Text style={styles.title}>{`Find the World's most\nAmazing Jobs`}</Text>

            <Input />

            <JobMatchedCard />

            <JobCategoryCard />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 30,
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 26,
        fontWeight: '600'
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: theme.input,
        paddingHorizontal: 16,
        borderRadius: 10,
        marginTop: 28
    },
    subContainer: {
        marginTop: 30,
    },
    subTitle: {
        fontSize: 22,
        fontWeight: '600'
    },
    filter: {
        backgroundColor: '#fff',
        padding: 5,
        borderRadius: 10
    }
});

export default Home;
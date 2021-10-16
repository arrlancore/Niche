import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { theme } from '../theme';
import { categories } from '../data';;

import JobMatchedCard from '../components/JobMatchedCard';

const FILTER_ICON_SIZE = 24;
const SEARCH_ICON_SIZE = 26;

const Header = () => {
    return (
        <View style={{ marginTop: 16 }}>
            <MaterialIcons name='sort' size={28} color='black' />
        </View>
    );
};

const FilterButton = () => {
    return (
        <TouchableOpacity>
            <MaterialIcons name='filter-center-focus' size={FILTER_ICON_SIZE} />
        </TouchableOpacity>
    );
};

const Input = () => {
    return (
        <View style={styles.inputContainer}>
            <MaterialIcons name='search' size={SEARCH_ICON_SIZE} />
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


const CategoryCard = () => {
    return (
        <View style={styles.categoryCardContainer}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 30
                }}
            >
                {categories.map(category => (
                    <View key={category.name} style={styles.categoryCard}>
                        <View style={{
                            height: 30,
                            width: 30,
                            backgroundColor: '#fff'
                        }} />

                        <Text style={{
                            fontSize: 12,
                            marginTop: 10
                        }}>{category.name}</Text>

                        <Text style={{
                            fontSize: 16,
                            marginTop: 8,
                            fontWeight: '700'
                        }}>{category.count}k Jobs</Text>

                        <TouchableOpacity style={{
                            paddingVertical: 8,
                            paddingHorizontal: 10,
                            backgroundColor: '#fff',
                            borderRadius: 6,
                            marginTop: 10
                        }}>
                            <Text style={{
                                textAlign: 'center',
                                fontSize: 9,
                                fontWeight: '500',
                            }}>View Jobs</Text>
                        </TouchableOpacity>

                    </View>
                ))}
            </ScrollView>
        </View>
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
            <Header />

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
        paddingHorizontal: 30,
        backgroundColor: '#fff'
    },
    title: {
        marginTop: 28,
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
    jobCardContainer: {
        height: 230,
        backgroundColor: theme.cardBackground,
        borderRadius: 12,
        paddingVertical: 22,
        paddingHorizontal: 26,
        marginTop: 30,
    },
    categoryCardContainer: {
        marginTop: 30,
        marginHorizontal: -30,
    },
    categoryCard: {
        paddingVertical: 16,
        paddingHorizontal: 18,
        backgroundColor: theme.cardBackground,
        borderRadius: 12,
        marginRight: 12
    }
});

export default Home;
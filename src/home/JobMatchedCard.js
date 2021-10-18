import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { jobsData } from '../data';
import JobCard from './JobCard';
import Carousel from 'react-native-snap-carousel';
import { useNavigation } from '@react-navigation/native';

const sliderWidth = Dimensions.get('window').width;
const itemWidth = sliderWidth * .85;

const CardTitle = ({ title }) => {
    return (
        <Text style={styles.title}>{title}</Text>
    );
};

const JobMatchedCard = () => {
    const navigation = useNavigation();

    const onJobCardPress = (job) => {
        navigation.navigate('job', { job });
    };

    const renderCard = ({ item }) => {
        return (
            <JobCard
                {...{ item }}
                {...{ onJobCardPress }}
            />
        );
    };

    return (
        <View style={[styles.container]}>
            <CardTitle title='Job Matched' />
            <View style={{ alignItems: 'center' }}>
                <Carousel
                    layout={'stack'}
                    data={jobsData}
                    renderItem={renderCard}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
    },
    title: {
        fontSize: 20,
        fontWeight: '500'
    }
});

export default JobMatchedCard;
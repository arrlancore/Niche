import React, { useState } from 'react';
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
    const [jobs, setJobs] = useState(jobsData);
    const navigation = useNavigation();

    const onJobCardPress = () => {
        navigation.navigate('Job');
    };

    const renderCard = ({ item, index }) => {
        return (
            <JobCard
                {...{ item }}
                {...{ index }}
                {...{ jobs }}
                {...{ setJobs }}
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
                    data={jobs}
                    renderItem={renderCard}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                // scrollInterpolator={scrollInterpolator}
                // slideInterpolatedStyle={animatedStyles}
                // useScrollView={true}
                // contentContainerCustomStyle={{
                //     height: 300
                // }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        // height: 300
    },
    title: {
        fontSize: 22,
        fontWeight: '600'
    }
});

export default JobMatchedCard;
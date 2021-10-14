import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { jobsData } from '../data';
import JobCard from './JobCard';


const CardTitle = ({ title }) => {
    return (
        <Text style={styles.title}>{title}</Text>
    );
};


const JobMatchedCard = () => {
    const [jobs, setJobs] = useState(jobsData);

    return (
        <View style={[styles.container]}>
            <CardTitle title='Job Matched' />
            {jobs.reverse().map((job, index) => (
                <View key={job.title}>
                    <JobCard
                        {...{ job }}
                        {...{ index }}
                        {...{ jobs }}
                        {...{ setJobs }}
                    />
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
    },
    title: {
        fontSize: 22,
        fontWeight: '600'
    }
});

export default JobMatchedCard;
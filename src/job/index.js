import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';

const SCR_WIDTH = Dimensions.get('window').width;

const JobInfo = () => (
    <View style={styles.jobInfoContainer}>
        <View style={styles.logo} />

        <Text style={styles.jobTitle}>Product Designer</Text>

        <Text style={styles.company}>Microsoft .Inc</Text>

        <Text style={styles.location}>1600 Amphitheatre Parkway, Mountain View</Text>
    </View>
);

const Section = ({
    title,
    description
}) => {
    return (
        <View>
            <Text style={styles.sectionTitle}>{title}</Text>
            <Text style={styles.sectionDescr}>{description}</Text>
        </View>
    );
};

const JobDetails = () => (
    <View style={styles.jobDetailsContainer}>
        <Section
            title='Job Descriptions'
            description='bla bla bla bla bla'
        />
    </View>
);

const JobAlert = () => {
    return (
        <View style={[styles.alertContainer, {
            transform: [
                { translateY: 0 }
            ]
        }]}>
            <Text style={{ color: '#fff' }}>Similar Job Alert</Text>
            <Text>Similar Job Alert</Text>
        </View>
    );
};

const Job = ({
    params,
}) => {
    return (
        <View style={styles.container}>

            <JobInfo />

            <JobDetails />

            <JobAlert />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30,
        backgroundColor: '#fff'
    },
    jobInfoContainer: {
        height: '26%',
        // backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        height: 40,
        width: 40,
        // backgroundColor: 'blue'
    },
    jobTitle: {
        marginTop: 14,
        fontSize: 22,
        fontWeight: '700'
    },
    company: {
        marginTop: 12,
        fontSize: 16,
        fontWeight: '500'
    },
    location: {
        marginTop: 12,
        fontSize: 13,
    },
    jobDetailsContainer: {
        flex: 1,
        // backgroundColor: 'green',
        paddingVertical: 20
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600'
    },
    sectionDescr: {
        marginTop: 10,
        fontSize: 14,
    },
    alertContainer: {
        position: 'absolute',
        bottom: 0,
        height: 90,
        width: SCR_WIDTH,
        backgroundColor: '#000',
        borderTopLeftRadius: 28,
        borderTopRightRadius: 28,
        padding: 30,
    }
});

export default Job;

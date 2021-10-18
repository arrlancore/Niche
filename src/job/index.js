import React, { useEffect, useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView
} from 'react-native';
import Popup from '../components/Popup';
import { theme } from '../theme';
import { POPUP_HEIGHT } from '../utils';

const getSectionTitle = (text) => {
    if (text === 'description') return 'Job Description';
    if (text === 'responsibilities') return 'Responsibilities';
    if (text === 'jobType') return 'Job Type';
    if (text === 'salary') return 'Salary';
    if (text === 'NumOfHires') return 'Number of Hires';
    return '--';
};


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

const JobDetails = ({ details }) => {
    return (
        <View style={styles.jobDetailsContainer}>
            {Object.entries(details).map(([title, description], index) => {
                const hasSpacer = details.length - 1 !== index;
                return (
                    <View key={`${index}`}>
                        <Section
                            title={getSectionTitle(title)}
                            description={description}
                        />
                        {hasSpacer && <View style={{ height: 24 }} />}
                    </View>
                );
            })}

        </View>
    );
};

const Job = ({
    route
}) => {
    const { job } = route.params;

    const [showAlert, setShowAlert] = useState(false);
    const [showSkillBadge, setShowSkillBadge] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowAlert(true);
            setShowSkillBadge(true);
        }, 1000);
    }, []);

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <JobInfo />

                <JobDetails details={job.details} />
            </ScrollView>

            <Popup
                visible={showAlert}
                title='Similar Job Alert'
                description='Product designer, Typography'
                zIndex={2}
            />

            <Popup
                visible={showSkillBadge}
                title='Similar Job Alert'
                description='Product designer, Typography'
                extraOffset={-72}
                surface={theme.bg1}
                zIndex={1}
                textColor='#000'
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    scrollView: {
        flexGrow: 1,
        paddingHorizontal: 30,
        paddingBottom: (POPUP_HEIGHT * 2) - 50
    },
    jobInfoContainer: {
        height: 230,
        // backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
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
        paddingTop: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600'
    },
    sectionDescr: {
        marginTop: 10,
        fontSize: 14,
        color: theme.subText
    },

});

export default Job;

import React, { useEffect, useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';
import Popup from '../components/Popup';
import { theme } from '../theme';
import { elevation_3, elevation_6, POPUP_HEIGHT } from '../utils';
import Arrow from '../../assets/arrow-left.svg';
import Toggle from '../components/Toggle';

const getSectionTitle = (text) => {
    if (text === 'description') return 'Job Description';
    if (text === 'responsibilities') return 'Responsibilities';
    if (text === 'jobType') return 'Job Type';
    if (text === 'salary') return 'Salary';
    if (text === 'NumOfHires') return 'Number of Hires';
    return '--';
};


const JobInfo = ({ job }) => (
    <View style={styles.jobInfoContainer}>
        <View style={styles.logoContainer}>
            <Image source={job.logo} style={styles.logo} />
        </View>

        <Text style={styles.jobTitle}>{job.title}</Text>

        <Text style={styles.company}>{job.company}</Text>

        <Text style={styles.location}>{job.location}</Text>
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
    const [jobAlert, setJobAlert] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowAlert(true);
            setShowSkillBadge(true);
        }, 1600);

        return () => {
            clearTimeout(timer);
        };

    }, []);

    const onJobAlert = () => {
        setJobAlert(value => !value);
    };

    const BadgeButton = (
        <TouchableOpacity style={styles.badgeButton}>
            <Arrow height={18} width={18} fill="#000" />
        </TouchableOpacity>
    );

    const ToggleButton = (
        <Toggle
            onPress={onJobAlert}
            active={jobAlert}
        />
    );

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <JobInfo {...{ job }} />
                <JobDetails details={job.details} />
            </ScrollView>

            <Popup
                visible={showAlert}
                title='Similar Job Alert'
                description='Product designer, Typography'
                action={ToggleButton}
                zIndex={2}
            />

            <Popup
                visible={showSkillBadge}
                title='Similar Job Alert'
                description='Product designer, Typography'
                action={BadgeButton}
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        ...elevation_6,
    },
    logo: {
        height: 40,
        width: 40,
        resizeMode: 'contain',
        borderRadius: 10,
    },
    jobTitle: {
        marginTop: 14,
        fontSize: 22,
        fontWeight: '700',
        color: theme.text_main
    },
    company: {
        marginTop: 12,
        fontSize: 16,
        fontWeight: '500',
        color: theme.text_secondary
    },
    location: {
        marginTop: 12,
        fontSize: 13,
        color: theme.text_tertiary
    },
    jobDetailsContainer: {
        flex: 1,
        paddingTop: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: theme.text_secondary
    },
    sectionDescr: {
        marginTop: 10,
        fontSize: 14,
        color: theme.text_tertiary,
        lineHeight: 19
    },
    badgeButton: {
        padding: 8,
        backgroundColor: '#fff',
        borderRadius: 10,
        ...elevation_3,
        transform: [{
            rotate: '180deg',
        }],
    }

});

export default Job;

import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableWithoutFeedback
} from 'react-native';
import { theme } from '../theme';
import { cardBackgroundColor } from '../helpers';
import ClockIcon from '../../assets/clock.svg';
import { elevation_5 } from '../utils';

const JobStatus = ({ order }) => {
    return (
        <View style={{
            marginTop: 20,
            flexDirection: 'row',
            alignItems: 'center'
        }}>
            <View style={styles.clock}>
                <ClockIcon fill={theme.icon_main} />
            </View>
            <Text style={{
                marginLeft: 5,
                fontWeight: '400',
                color: theme.text_secondary,
                fontSize: 14
            }}>
                {order.message}
                <Text style={{
                    fontWeight: '600',
                }}>{' '}{order.countMsg}</Text>
            </Text>
        </View>
    );
};


const JobCardFooter = ({ applied, hoursAgo }) => {
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 20
        }}>
            <View style={{
                flexDirection: 'row',
            }}>
                {applied.map((person, i) => (
                    <View key={`${i}`} style={{
                        height: 32,
                        width: 32,
                        borderRadius: 32 / 2,
                        borderWidth: 2,
                        borderColor: '#fff',
                        marginRight: -10
                    }}>
                        <Image
                            source={person.img}
                            style={{
                                height: '100%',
                                width: '100%',
                                borderRadius: 32 / 2,
                            }}
                        />
                    </View>
                ))}
            </View>

            <Text style={{
                fontSize: 14,
                fontWeight: '400',
                color: theme.text_secondary,
            }}>{hoursAgo}</Text>
        </View>
    );
};

const JobCard = ({
    item,
    onJobCardPress
}) => {
    const {
        title,
        category,
        logo,
        applied,
        company,
        hoursAgo,
        order,
        tags,
    } = item;

    const renderTags = tags.map(tag => (
        <View
            key={tag}
            style={styles.tagContainer}>
            <Text style={styles.tag}>{tag}</Text>
        </View>
    ));

    return (
        <TouchableWithoutFeedback onPress={() => onJobCardPress(item)}>
            <View style={[
                styles.container,
                cardBackgroundColor(category)
            ]}>
                <View style={styles.row}>
                    <Text style={styles.company}>{company}</Text>

                    <Image source={logo} style={styles.logo} />
                </View>

                <Text style={styles.title}>{title}</Text>

                <View style={styles.tagsContainer}>
                    {renderTags}
                </View>

                <JobStatus
                    {...{ order }}
                />
                <JobCardFooter
                    {...{ applied }}
                    {...{ hoursAgo }}
                />
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 230,
        borderRadius: 12,
        paddingVertical: 22,
        paddingHorizontal: 26,
        marginBottom: 8,
        ...elevation_5
    },
    company: {
        fontSize: 14,
        fontWeight: '500',
        color: theme.text_secondary
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
        marginTop: 5,
        color: theme.text_main
    },
    tagsContainer: {
        flexDirection: 'row',
        marginTop: 18
    },
    tagContainer: {
        paddingVertical: 8,
        paddingHorizontal: 12,
        backgroundColor: '#fff',
        borderRadius: 99,
        marginRight: 8
    },
    tag: {
        fontSize: 11,
        fontWeight: '600',
        color: theme.text_secondary
    },
    logo: {
        height: 25,
        width: 25,
        borderRadius: 5,
        resizeMode: 'contain'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    clock: {
        height: 16,
        width: 16,
    }
});

export default JobCard;
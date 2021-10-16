import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableWithoutFeedback
} from 'react-native';
import { theme } from '../theme';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const CLOCK_ICON_SIZE = 16;

const JobStatus = ({ order }) => {
    return (
        <View style={{
            marginTop: 20,
            flexDirection: 'row',
            alignItems: 'center'
        }}>
            <MaterialIcons name='access-time' size={CLOCK_ICON_SIZE} />
            <Text style={{
                marginLeft: 8,
                fontWeight: '500'
            }}>
                <Text>{order.message}</Text>
                <Text style={{
                    fontWeight: '700'
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
                fontWeight: '500'
            }}>{hoursAgo}</Text>
        </View>
    );
};

const JobCard = ({
    item,
    index,
    jobs,
    setJobs,
    onJobCardPress
}) => {
    const {
        title,
        applied,
        company,
        hoursAgo,
        order,
        tags,
        color
    } = item;

    const renderTags = tags.map(tag => (
        <View
            key={tag}
            style={styles.tagContainer}>
            <Text style={styles.tag}>{tag}</Text>
        </View>
    ));

    return (
        <TouchableWithoutFeedback onPress={onJobCardPress}>
            <View style={[
                styles.container,
                {
                    backgroundColor: color,
                }
            ]}>
                <Text style={styles.company}>{company}</Text>

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
        backgroundColor: theme.cardBackground,
        borderRadius: 12,
        paddingVertical: 22,
        paddingHorizontal: 26,
        marginTop: 30,
    },
    company: {
        fontSize: 14,
        fontWeight: '500'
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
        marginTop: 12
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
        fontWeight: '600'
    }

});

export default JobCard;
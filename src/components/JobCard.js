import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import Animated, {
    useSharedValue,
    withSpring,
    useAnimatedStyle,
    useAnimatedGestureHandler,
    runOnJS,
} from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';
import { theme } from '../theme';
import { getRotationDegree, elevation_1, elevation_3 } from '../helpers';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const CLOCK_ICON_SIZE = 16;
const SCR_WIDTH = Dimensions.get('window').width;

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

const JobCard = ({ job, index, jobs, setJobs }) => {
    const {
        title,
        applied,
        company,
        hoursAgo,
        order,
        tags,
        color
    } = job;
    const x = useSharedValue(0);
    const y = useSharedValue(0);

    const updateJobsCards = () => {
        const newJobs = jobs.slice(0, -1);
        setTimeout(() => {
            setJobs(newJobs.reverse());
        }, 300);
    };

    const marginOffsetStyle = {
        marginTop: index === 0 ? 30 : -230,
    };

    const gestureHandler = useAnimatedGestureHandler({
        onStart: (_, ctx) => {
            ctx.startX = x.value;
            ctx.startY = y.value;
        },
        onActive: (event, ctx) => {
            const x_offset = ctx.startX + event.translationX;
            const y_offset = ctx.startY + event.translationY;

            x.value = x_offset;
            y.value = y_offset > 26 ? 26 : y_offset < -26 ? -26 : y_offset;
        },
        onEnd: (_) => {
            if (x.value > 100) {
                x.value = withSpring(SCR_WIDTH);
                runOnJS(updateJobsCards)();
                return;
            }
            if (x.value < -100) {
                x.value = withSpring(-SCR_WIDTH);
                runOnJS(updateJobsCards)();
                return;
            }
            x.value = withSpring(0);
            y.value = withSpring(0);
        },
    });

    const degreeToRotate = getRotationDegree(index, jobs);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: x.value,
                },
                {
                    translateY: y.value,
                },
                {
                    rotate: degreeToRotate
                }
            ],
        };
    });

    const isLastItem = jobs.length - 1 === index;
    const shadow = isLastItem ? elevation_3 : elevation_1;
    const opacity = isLastItem ? 1 : 1;

    const renderTags = tags.map(tag => (
        <View
            key={tag}
            style={styles.tagContainer}>
            <Text style={styles.tag}>{tag}</Text>
        </View>
    ));

    return (
        <PanGestureHandler onGestureEvent={gestureHandler}>
            <Animated.View style={[
                styles.container,
                marginOffsetStyle,
                animatedStyle,
                {
                    backgroundColor: color,
                    opacity,
                    ...shadow
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
            </Animated.View>
        </PanGestureHandler>
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
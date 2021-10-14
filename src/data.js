import { getRandomColorIndex } from './helpers';
import { colors } from './theme';

export const jobsData = [
    {
        company: 'Microsoft .Inc',
        title: 'Sr. Product Designer',
        tags: ['User Interface', 'User Research / Flow'],
        hoursAgo: '6 hours ago',
        applied: [
            {
                img: require('../assets/image1.jpeg')
            },
            {
                img: require('../assets/image2.jpeg')
            },
            {
                img: require('../assets/image3.jpeg')
            },
            {
                img: require('../assets/image4.jpeg')
            },
            {
                img: require('../assets/image2.jpeg')
            }
        ],
        order: {
            message: 'Be in the first',
            countMsg: '31 applicants'
        },
        color: function () {
            return colors[getRandomColorIndex()];
        }(),
    },
    {
        company: 'Google',
        title: 'Sr. Software Architect',
        tags: ['User Interface', 'User Research / Flow'],
        hoursAgo: '6 hours ago',
        applied: [
            {
                img: require('../assets/image1.jpeg')
            },
            {
                img: require('../assets/image2.jpeg')
            },
            {
                img: require('../assets/image3.jpeg')
            },
            {
                img: require('../assets/image4.jpeg')
            },
            {
                img: require('../assets/image2.jpeg')
            }
        ],
        order: {
            message: 'Be in the first',
            countMsg: '31 applicants'
        },
        color: function () {
            return colors[getRandomColorIndex()];
        }(),
    },
    {
        company: 'YouTube .Inc',
        title: 'HR Manager',
        tags: ['User Interface', 'User Research / Flow'],
        hoursAgo: '6 hours ago',
        applied: [
            {
                img: require('../assets/image1.jpeg')
            },
            {
                img: require('../assets/image2.jpeg')
            },
            {
                img: require('../assets/image3.jpeg')
            },
            {
                img: require('../assets/image4.jpeg')
            },
            {
                img: require('../assets/image2.jpeg')
            }
        ],
        order: {
            message: 'Be in the first',
            countMsg: '31 applicants'
        },
        color: function () {
            return colors[getRandomColorIndex()];
        }(),
    }
];

export const categories = [
    {
        icon: 'some-icon',
        name: 'Design',
        count: '3.2',
    },
    {
        icon: 'some-icon',
        name: 'Network',
        count: '2.6',
    },
    {
        icon: 'some-icon',
        name: 'Security',
        count: '2.8',
    },
    {
        icon: 'some-icon',
        name: 'IT',
        count: '2.8',
    },
    {
        icon: 'some-icon',
        name: 'Software Architect',
        count: '2.8',
    },
    {
        icon: 'some-icon',
        name: 'Tech Lead',
        count: '2.8',
    },
];
import { getRandomColorIndex } from './helpers';
import { colors } from './theme';

export const jobsData = [
    {
        company: 'Uber Technologies Inc',
        title: 'Sr. Product Designer',
        tags: ['User Interface', 'User Research / Flow'],
        logo: require('../assets/uber.png'),
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
        details: {
            description: `We're a team of youthful, intelligent and dedicated creative who have an unrivaled energy and passion for crafting beautiful and meaningful products\n\nWe strive to follow all UX processes of ideation research and MVP for our product designs to enable output that is both aesthetic and strategic`,
            responsibilities: `Keep the interface beautiful and easy to use`,
            jobType: 'Full-Time',
            salary: `$90,000 - $150,000 a year`,
            NumOfHires: 2,
        }

    },
    {
        company: 'LinkedIn Corporation',
        title: 'Talent Aquisition Manager',
        tags: ['User Interface', 'User Research / Flow'],
        logo: require('../assets/linkedin.png'),
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
        details: {
            description: `We're a team of youthful, intelligent and dedicated creative who have an unrivaled energy and passion for crafting beautiful and meaningful products\nWe strive to follow all UX processes of ideation research and MVP for our product designs to enable output that is both aesthetic and strategic`,
            responsibilities: `Keep the interface beautiful and easy to use`,
            jobType: 'Full-Time',
            salary: `$90,000 - $150,000 a year`,
            NumOfHires: 2,
        }
    },
    {
        company: 'Google',
        title: 'Lead Software Engineer',
        tags: ['User Interface', 'User Research / Flow'],
        logo: require('../assets/youtube.jpg'),
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
        details: {
            description: `We're a team of youthful, intelligent and dedicated creative who have an unrivaled energy and passion for crafting beautiful and meaningful products\nWe strive to follow all UX processes of ideation research and MVP for our product designs to enable output that is both aesthetic and strategic`,
            responsibilities: `Keep the interface beautiful and easy to use`,
            jobType: 'Full-Time',
            salary: `$90,000 - $150,000 a year`,
            NumOfHires: 2,
        }
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
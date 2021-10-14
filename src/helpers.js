import { colors } from './theme';

export const getRandomColorIndex = () => {
    return Math.floor(Math.random() * colors.length);
};

export const degreeToRadian = (degrees) => {
    return degrees * (Math.PI / 180);
};

export const isOdd = (num) => {
    return num % 2;
};

export const getRotationDegree = (index, arr) => {
    const lastItem = arr.length - 1;
    if (index === lastItem) return '0deg';
    if (isOdd(index)) return '4deg';
    return '-4deg';
};
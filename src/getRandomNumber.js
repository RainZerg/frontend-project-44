import _ from 'lodash';

export function getRandomNum(min, max) { 
    const number = Math.floor(Math.random() * (max - min + 1)) + min;
    return number; 
}

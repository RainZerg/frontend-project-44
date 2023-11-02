import { gameEngine } from '../gameEngine.js';
import { getRandomNum } from '../getRandomNumber.js';

const rule = 'Find the gratest common divisor of given numbers.';

function answerGcd(a, b) {
    if (!b) {
        return a;
    }

    return answerGcd(b, a % b);
}

function getQnA() {
    const question = [getRandomNum(0, 100), getRandomNum(0, 100)];
    const answer = answerGcd(...question).toString();
    return [question.join(' '), answer];
}

function getGcd() {
    gameEngine(rule, getQnA)
}

export { getGcd };
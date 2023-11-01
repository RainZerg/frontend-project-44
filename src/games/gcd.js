import { gameEngine } from '../gameEngine.js';
import { getRandomNum } from '../getRandomNumber.js';

const rule = 'Find the gratest common divisor of giver numbers.';

function answerGcd(a, b) {
    if (!b) {
        return a;
    }

    return answerGcd(b, a % b);
}

function getQnA() {
    const question = [getRandomNum(), getRandomNum()];
    const answer = answerGcd(...question).toString();
    return [question.join(' '), answer];
}

function getGcd() {
    gameEngine(rule, getQnA)
}

export { getGcd };
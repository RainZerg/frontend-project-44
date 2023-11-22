import gameEngine from '../gameEngine.js';
import getRandomNum from '../getRandomNumber.js';

const rule = 'Find the greatest common divisor of given numbers.';

const answerGcd =  (a, b) => {
  if (!b) {
    return a;
  }

  return answerGcd(b, a % b);
}

const getQnA = () => {
  const question = [getRandomNum(0, 100), getRandomNum(0, 100)];
  const answer = answerGcd(...question).toString();
  return [question.join(' '), answer];
}

export default () => {
  gameEngine(rule, getQnA);
};

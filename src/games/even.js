import gameEngine from '../gameEngine.js';
import getRandomNumber from '../utils.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => { return num % 2 === 0; }
const getQnA = () => {
  const question = getRandomNumber(0, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
}

export default () => {
  gameEngine(rule, getQnA);
};

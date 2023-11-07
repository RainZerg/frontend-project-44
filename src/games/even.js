import gameEngine from '../gameEngine.js';
import getRandomNum from '../getRandomNumber.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

function isEven(num) { return num % 2 === 0; }
function getQnA() {
  const question = getRandomNum(0, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
}

export default () => {
  gameEngine(rule, getQnA);
};

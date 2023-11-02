import { gameEngine } from '../gameEngine.js';
import { getRandomNum } from '../getRandomNumber.js';
import randomEquasion from '../randomEquasion.js';

const rule = 'What is the result of the expression?';

function getQnA() {
  const equasion = randomEquasion(getRandomNum(0, 100), getRandomNum(0, 100));
  return [equasion.equasion, equasion.result];
}

function calculate() {
  gameEngine(rule, getQnA);
}

export { calculate };

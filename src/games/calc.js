import { gameEngine } from '../gameEngine.js';
import { getRandomNum } from '../getRandomNumber.js';
import randomEquasion from '../randomEquasion.js';

const rule = 'What is the result of the expression?';

function getQnA() {
  const equasion = randomEquasion(getRandomNum(), getRandomNum());
  return [equasion.equasion, equasion.result];
}

function calculate() {
  gameEngine(rule, getQnA);
}

export { calculate };

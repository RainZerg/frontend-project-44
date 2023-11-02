import gameEngine from '../gameEngine.js';
import getRandomNum from '../getRandomNumber.js';

const rule = 'What number is missing in the progression?';

const progressionLength = 10;

function getProgression(startProgression, stepProgression) {
  const progressions = [];
  for (let i = 0; i < progressionLength; i += 1) {
    const value = startProgression + stepProgression * i;
    progressions.push(value);
  }
  return progressions;
}

function getQnA() {
  const minStep = 2;
  const maxStep = 10;
  const start = getRandomNum(1, 100);
  const step = getRandomNum(minStep, maxStep);
  const progression = getProgression(start, step);
  const minIndexOfHiddenNumber = 0;
  const maxIndexOfHiddenNumber = progressionLength - 1;
  const indexOfHiddenNumber = getRandomNum(minIndexOfHiddenNumber, maxIndexOfHiddenNumber);
  const answer = String(progression[indexOfHiddenNumber]);
  progression[indexOfHiddenNumber] = '..';
  const question = progression.join(' ');
  return [question, answer];
}

export default () => gameEngine(rule, getQnA);

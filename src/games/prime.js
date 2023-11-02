import { gameEngine } from '../gameEngine.js';
import { getRandomNum } from '../getRandomNumber.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    let divider = 2;
    while (divider <= (number / 2)) {
        if (number % divider === 0) {
          return false;
        }
        divider += 1;
      }
      return true;
}

function getQnA() {
    const question = getRandomNum(0, 100);
    const answer = isPrime(question) ? 'yes' : 'no';
    return [question, answer];
}

export default () => gameEngine(rule, getQnA);
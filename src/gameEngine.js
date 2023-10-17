import readlinesync from 'readline-sync';
import { getName } from './cli.js';

const roundsCount = 3;

function gameEngine(rule, getQnA) {
  console.log('Welcome to the Brain Games!');
  const userName = getName();
  console.log(rule);
  let correctAnswersCount = 0;

  while (correctAnswersCount < roundsCount) {
    const [question, correctAnswer] = getQnA();
    console.log(`Question ${question}`);
    const userAnswer = readlinesync.question('Your answer: ');

    if (correctAnswer === userAnswer) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`"${userAnswer}" is a wrong answer.\nCorrect answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
}

export { gameEngine };

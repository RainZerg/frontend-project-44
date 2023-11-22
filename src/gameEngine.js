import readlinesync from 'readline-sync';

const roundsCount = 3;

export default (rule, getQnA) => {
  console.log('Welcome to the Brain Games!');
  const userName = getName();
  console.log(rule);
  let round = 0;

  while (round < roundsCount) {
    const [question, correctAnswer] = getQnA();
    console.log(`Question: ${question}`);
    const userAnswer = readlinesync.question('Your answer: ');

    if (correctAnswer !== userAnswer) {
      console.log(`"${userAnswer}" is a wrong answer.\nCorrect answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
    round += 1;
  }
  console.log(`Congratulations, ${userName}!`);
};

const getName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

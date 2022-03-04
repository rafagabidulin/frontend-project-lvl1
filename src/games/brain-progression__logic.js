import readlineSync from 'readline-sync';
import greetings from '../cli.js';

const missingNumberQuestion = () => {
  console.log('What number is missing in the progression?');
};

const getRandom = (min, max) => {
  const minInt = Math.ceil(min);
  const maxInt = Math.floor(max);
  return Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt;
};

const progressionFunction = (arg, diff, range) => {
  let num = arg;
  let progressionRange = range;
  const progressionArr = [];

  while (progressionRange > 0) {
    progressionArr.push(num);
    num += diff;
    progressionRange -= 1;
  }
  return progressionArr;
};

const brainProgression = () => {
  const rounds = 3;
  const name = greetings();

  missingNumberQuestion();

  for (let i = 0; i < rounds; i += 1) {
    const arg = getRandom(1, 20);
    const diff = getRandom(1, 5);
    const range = getRandom(6, 10);
    const progressionArr = progressionFunction(arg, diff, range);
    const randomIndex = getRandom(0, progressionArr.length - 1);
    const hiddenNumber = progressionArr[randomIndex];
    progressionArr[randomIndex] = '..';
    const arrWithHiddenNumber = progressionArr.join(' ');

    console.log(`Question: ${arrWithHiddenNumber}`);

    const answer = Number(readlineSync.question('Your answer: '));

    if (answer !== hiddenNumber) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${hiddenNumber}`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}`);
};

export default brainProgression;

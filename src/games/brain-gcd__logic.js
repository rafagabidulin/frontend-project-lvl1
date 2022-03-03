import readlineSync from 'readline-sync';
import greetings from '../cli.js';

const findGcdQuestion = () => {
  console.log('Find the greatest common divisor of given numbers.');
};

const getRandomNumber = (min, max) => {
  const minInt = Math.ceil(min);
  const maxInt = Math.floor(max);
  return Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt;
};

const getGreatestCommonDivision = (num1, num2) => {
  let arg1 = num1;
  let arg2 = num2;
  while (arg1 !== 0 && arg2 !== 0) {
    if (arg1 > arg2) {
      arg1 %= arg2;
    } else {
      arg2 %= arg1;
    }
  }
  return arg1 + arg2;
};

const brainGcd = () => {
  const rounds = 3;
  const min = 0;
  const max = 100;

  const name = greetings();

  findGcdQuestion();

  for (let i = 0; i < rounds; i += 1) {
    const randomNumber1 = getRandomNumber(min, max);
    const randomNumber2 = getRandomNumber(min, max);

    console.log(`Question: ${randomNumber1} ${randomNumber2}`);

    const answer = Number(readlineSync.question('Your answer: '));
    const result = getGreatestCommonDivision(randomNumber1, randomNumber2);

    if (result !== answer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${result}`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default brainGcd;

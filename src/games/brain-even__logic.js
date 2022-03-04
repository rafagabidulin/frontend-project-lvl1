import readlineSync from 'readline-sync';
import greetings from '../cli.js';

const yesNoAnswer = () => {
  console.log('Answer "yes" if given number is even. Otherwise answer "no".');
};

const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const getRandomNumber = (min, max) => {
  const minInt = Math.ceil(min);
  const maxInt = Math.floor(max);
  return Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt;
};

const brainEven = () => {
  const rounds = 3;
  const min = 0;
  const max = 100;

  const name = greetings();

  yesNoAnswer();

  for (let i = 0; i < rounds; i += 1) {
    const randomNumber = getRandomNumber(min, max);
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    const result = isEven(randomNumber);
    if (answer !== result) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${result}`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}`);
};

export default brainEven;

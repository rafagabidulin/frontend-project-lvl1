import readlineSync from 'readline-sync';
import greetings from '../cli.js';

const yesNoAnswer = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
};

const getRandomNumber = (min, max) => {
  const minInt = Math.ceil(min);
  const maxInt = Math.floor(max);
  return Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt;
};

const isPrime = (number) => {
  if (number <= 1) {
    return 'no';
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return 'no';
  }
  return 'yes';
};

const brainPrime = () => {
  const rounds = 3;
  const min = 0;
  const max = 100;
  const name = greetings();

  yesNoAnswer();

  for (let i = 0; i < rounds; i += 1) {
    const randomNumber = getRandomNumber(min, max);
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    const result = isPrime(randomNumber);
    if (answer !== result) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${result}`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}`);
};

export default brainPrime;

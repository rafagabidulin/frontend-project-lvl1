import readlineSync from 'readline-sync';
import greetings from '../cli.js';

const resultAnswer = () => {
  console.log('What is the result of the expression?');
};

const getRandom = (min, max) => {
  const minInt = Math.ceil(min);
  const maxInt = Math.floor(max);
  return Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt;
};

const getCalc = (operand1, operand2, operator) => {
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    default:
      return false;
  }
};

const brainCalc = () => {
  const rounds = 3;
  const min = 0;
  const max = 100;
  const operators = ['+', '-', '*'];
  const lastOperatorIndex = operators.length - 1;
  const firstOperatoIndex = 0;

  const name = greetings();

  resultAnswer();

  for (let i = 0; i < rounds; i += 1) {
    const randomNumber1 = getRandom(min, max);
    const randomNumber2 = getRandom(min, max);
    const randomOperatorIndex = getRandom(firstOperatoIndex, lastOperatorIndex);
    const randomOperator = operators[randomOperatorIndex];
    console.log(`Question: ${randomNumber1} ${randomOperator} ${randomNumber2}`);
    const result = getCalc(randomNumber1, randomNumber2, randomOperator);
    const answer = Number(readlineSync.question('Your answer: '));
    if (answer !== result) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${result}`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}`);
};

export default brainCalc;

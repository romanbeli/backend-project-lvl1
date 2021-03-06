import executeGame, { numOfRounds } from '../index.js';
import { generateNum } from '../utils.js';

const gameInstruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let divisor = Math.floor(num / 2); divisor > 0; divisor -= 1) {
    const divisionResult = num % divisor;

    if (divisionResult === 0 && divisor !== 1) {
      return false;
    }
  }
  return true;
};

const generateRounds = () => {
  const min = 2;
  const max = 22;

  const rounds = [];

  for (let i = 0; i < numOfRounds; i += 1) {
    const question = generateNum(min, max);

    const correctAnswer = isPrime(question) ? 'yes' : 'no';
    rounds.push([correctAnswer, question]);
  }
  return rounds;
};

const rounds = generateRounds();

export default () => executeGame(rounds, gameInstruction);

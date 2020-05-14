import executeGame from '../index.js';
import { generateNum } from '../utils.js';

const gameInstruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  let answer;
  if (num === 1) return true;
  for (let divisor = Math.floor(num / 2); divisor > 0; divisor -= 1) {
    const divisionResult = num % divisor;
    if (divisionResult === 0 && divisor !== 1) {
      answer = false;
      return answer;
    }
    if (divisionResult === 0 && divisor === 1) {
      answer = true;
      return answer;
    }
  }
  return answer;
};

const generateRounds = () => {
  const min = 1;
  const max = 22;
  const rounds = [];
  for (let i = 0; i < 3; i += 1) {
    const question = generateNum(min, max);
    const correctAnswer = isPrime(question) ? 'yes' : 'no';
    rounds.push([correctAnswer, question]);
  }
  return rounds;
};

const rounds = generateRounds();

export default () => executeGame(rounds, gameInstruction);

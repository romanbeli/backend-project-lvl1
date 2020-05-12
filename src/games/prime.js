import executeGame from '../index.js';
import generateNum from '../utils.js';

const gameInstruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  let answer;
  if (num === 1) return true;
  for (let divisor = Math.floor(num / 2); divisor > 0; divisor -= 1) {
    const divisionResult = num % divisor;
    if (divisionResult === 0 && divisor !== 1) {
      answer = false;
      break;
    } if (divisionResult === 0 && divisor === 1) {
      answer = true;
      break;
    }
  }
  return answer;
};

const playGame = () => {
  const downLimit = 1;
  const upLimit = 22;
  const rounds = [];
  for (let i = 0; i < 3; i += 1) {
    const question = generateNum(downLimit, upLimit);
    const correctAnswer = (isPrime(question)) ? 'yes' : 'no';
    rounds[i] = [correctAnswer, question];
  }
  return rounds;
};

const rounds = playGame();

export default () => executeGame(rounds, gameInstruction);

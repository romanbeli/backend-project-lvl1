import executeGame from '../index.js';
import generateNum from '../utils.js';

const gameInstruction = 'Find the greatest common divisor of given numbers.';

const calculateGCD = (a, b) => {
  let gcd;
  if (a === b) gcd = a;
  let min;
  let max;
  if (a > b) {
    min = b;
    max = a;
  } else {
    min = a;
    max = b;
  }
  for (let count = min; count > 0; count -= 1) {
    const divisionResultMin = min % count;
    const divisionResultMax = max % count;
    if (divisionResultMax === 0 && divisionResultMin === 0) {
      gcd = count;
      break;
    }
  }
  return gcd;
};
const playGame = () => {
  const downLimit = 1;
  const upLimit = 22;
  const rounds = [];
  for (let i = 0; i < 3; i += 1) {
    const a = generateNum(downLimit, upLimit);
    const b = generateNum(downLimit, upLimit);
    const correctAnswer = String(calculateGCD(a, b));
    const question = `${a} ${b}`;
    rounds[i] = [correctAnswer, question];
  }
  return rounds;
};
const rounds = playGame();

export default () => executeGame(rounds, gameInstruction);

import executeGame from '../index.js';
import { generateNum } from '../utils.js';

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
      return gcd;
    }
  }
  return gcd;
};

const generateRounds = () => {
  const min = 1;
  const max = 22;

  const rounds = [];

  for (let i = 0; i < 3; i += 1) {
    const a = generateNum(min, max);
    const b = generateNum(min, max);

    const correctAnswer = String(calculateGCD(a, b));
    const question = `${a} ${b}`;

    rounds.push([correctAnswer, question]);
  }
  return rounds;
};

const rounds = generateRounds();

export default () => executeGame(rounds, gameInstruction);

import gameExecuting from '../index.js';
import getRandom from '../utils.js';

const gameInstruction = 'Find the greatest common divisor of given numbers.';
const getGCD = (a, b) => {
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
    const diviseResoultMin = min % count;
    const diviseResoultMax = max % count;
    if (diviseResoultMax === 0 && diviseResoultMin === 0) {
      gcd = count;
      break;
    }
  }
  return gcd;
};
const playGame = () => {
  const limit = 22;
  const raunds = [];
  for (let i = 0; i < 3; i += 1) {
    const a = getRandom(limit) + 1;
    const b = getRandom(limit) + 1;
    const gcd = String(getGCD(a, b));
    const question = `${a} ${b}`;
    raunds[i] = [gcd, question];
  }
  gameExecuting(raunds, gameInstruction);
};
export default playGame;

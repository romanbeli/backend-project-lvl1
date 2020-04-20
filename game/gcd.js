import { getName, random, getInfoFromUser } from '../src/index.js';

const gcd = (gameInstruction) => {
  const name = getName(gameInstruction);
  const getGCD = (first, second) => {
    let min; // ==================why not const?
    let max; // ==================why not const?
    if (first === second) return first;
    if (first > second) {
      min = second;
      max = first;
    } else {
      min = first;
      max = second;
    }
    for (let count = min; count > 0; count -= 1) {
      const diviseResoultMin = min % count;
      const diviseResoultMax = max % count;
      if (diviseResoultMax === 0 && diviseResoultMin === 0) return count;
    }
    return true;
  };
  for (let iter = 1; iter < 4; iter += 1) {
    const limit = 100;
    const a = random(limit);
    const b = random(limit);
    console.log(`Question: ${a} ${b}`);
    const actualGCD = getGCD(a, b);
    console.log(actualGCD);
    const answearGCD = Number(getInfoFromUser('Your answer: '));
    if (actualGCD !== answearGCD) return console.log(`"${answearGCD}" is wrong answer ;(. Correct answer was "${actualGCD}"`);
    if (iter === 3) return console.log(`Correct!\nCongratulations, ${name}!`);
    console.log('Correct!');
  }
  return true;
};
export default gcd;

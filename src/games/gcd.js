import { random, gameExecute } from '../index.js';

const calculateGCD = () => {
  const gameInstruction = 'Find the greatest common divisor of given numbers.';
  const limit = 100;
  const arrayOfAnswer = [];
  const arrayOfQestion = [];
  for (let i = 0; i < 3; i += 1) {
    const a = random(limit) + 1;
    const b = random(limit) + 1;
    const question = `${a} ${b}`;
    let correctGCD;
    if (a === b) correctGCD = a;
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
        correctGCD = count;
        break;
      }
    }
    arrayOfAnswer[i] = correctGCD;
    arrayOfQestion[i] = question;
  }
  gameExecute(arrayOfAnswer, arrayOfQestion, gameInstruction);
};
export default calculateGCD;

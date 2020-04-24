import { random, getInfoFromUser } from '../index.js';

const gcd = () => {
  const limit = 100;
  const a = random(limit);
  const b = random(limit);
  let min;
  let max;
  if (a === b) return a; //
  if (a > b) {
    min = b;
    max = a;
  } else {
    min = a;
    max = b;
  }
  let correctGCD;
  for (let count = min; count > 0; count -= 1) {
    const diviseResoultMin = min % count;
    const diviseResoultMax = max % count;
    if (diviseResoultMax === 0 && diviseResoultMin === 0) {
      correctGCD = count;
      break;
    }
  }
  console.log(`Question: ${a} ${b}`);
  console.log(correctGCD);
  const stringAnswerGCD = (getInfoFromUser('Your answer: '));
  const numericAnswear = Number(stringAnswerGCD);
  const dataArr = [correctGCD, numericAnswear, stringAnswerGCD];
  return dataArr;
};
export default gcd;

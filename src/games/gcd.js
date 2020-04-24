import { random } from '../index.js';

const calculateGCD = () => {
  const limit = 100;
  const a = random(limit);
  const b = random(limit);
  let min;
  let max;
  if (a === b) return a;
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
  const question = `${a} ${b}`;
  console.log(correctGCD);
  const dataArr = [correctGCD, question];
  return dataArr;
};
export default calculateGCD;

import { random, getInfoFromUser } from '../index.js';

const prime = () => {
  const limit = 27;
  const num = random(limit);
  let correctAnswer;
  if (num === 1 || num === 0) correctAnswer = 'yes';
  for (let divisor = num - 1; divisor > 0; divisor -= 1) {
    const diviseResault = num % divisor;
    if (diviseResault === 0 && divisor !== 1) {
      correctAnswer = 'no';
      break;
    } else if (diviseResault === 0 && divisor === 1) {
      correctAnswer = 'yes';
      break;
    }
  }
  console.log(`Question: ${num}`);
  console.log(correctAnswer);
  const userAnswer = getInfoFromUser('Answer: ');
  const dataArr = [correctAnswer, userAnswer, userAnswer];
  return dataArr;
};
export default prime;

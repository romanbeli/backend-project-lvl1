import { random, getInfoFromUser } from '../index.js';

const isItEven = () => {
  let correctAnsewr = '';
  const limit = 111111;
  const randomNum = random(limit);
  const diviseResault = randomNum % 2;
  if (diviseResault === 0) correctAnsewr = 'yes';
  if (diviseResault !== 0) correctAnsewr = 'no';
  console.log(`Question: ${randomNum}`);
  const stringAnswer = getInfoFromUser('Your answer: ');
  const dataArr = [correctAnsewr, stringAnswer, stringAnswer, randomNum];
  return dataArr;
};
export default isItEven;

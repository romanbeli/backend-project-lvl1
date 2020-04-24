import { random } from '../index.js';

const isItEven = () => {
  let correctAnsewr = '';
  const limit = 111111;
  const randomNum = random(limit);
  const diviseResault = randomNum % 2;
  if (diviseResault === 0) correctAnsewr = 'yes';
  if (diviseResault !== 0) correctAnsewr = 'no';
  const dataArr = [correctAnsewr, randomNum];
  return dataArr;
};
export default isItEven;

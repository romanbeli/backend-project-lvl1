import { random, gameExecute } from '../index.js';

const isItEven = () => {
  const limit = 111111;
  const gameInstruction = 'Answer "yes" if the number is even, otherwise answer "no".';
  const arrayOfCorrectAnswer = [];
  const arrayOfQestion = [];
  for (let i = 0; i < 3; i += 1) {
    const randomNum = random(limit);
    const diviseResault = randomNum % 2;
    const correctAnsewr = diviseResault === 0 ? 'yes' : 'no';
    arrayOfCorrectAnswer[i] = correctAnsewr;
    arrayOfQestion[i] = randomNum;
  }
  gameExecute(arrayOfCorrectAnswer, arrayOfQestion, gameInstruction);
};
export default isItEven;

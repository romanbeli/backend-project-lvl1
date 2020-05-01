import gameExecuting from '../index.js';
import getRandom from '../utils.js';

const gameInstruction = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2) === 0;

const playGame = () => {
  const limit = 22;
  const raunds = [];
  for (let i = 0; i < 3; i += 1) {
    const randomNum = getRandom(limit);
    const correctAnsewr = isEven(randomNum) ? 'yes' : 'no';
    raunds[i] = [correctAnsewr, randomNum];
  }
  gameExecuting(raunds, gameInstruction);
};
export default playGame;

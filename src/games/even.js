import executeGame from '../index.js';
import generateNum from '../utils.js';

const gameInstruction = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2) === 0;

const generateRounds = () => {
  const downLimit = 0;
  const upLimit = 22;
  const raunds = [];
  for (let i = 0; i < 3; i += 1) {
    const question = generateNum(downLimit, upLimit);
    const correctAnsewr = isEven(question) ? 'yes' : 'no';
    raunds[i] = [correctAnsewr, question];
  }
  return raunds;
};
const rounds = generateRounds();

export default () => executeGame(rounds, gameInstruction);

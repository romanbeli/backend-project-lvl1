import executeGame, { numOfRounds } from '../index.js';
import { generateNum } from '../utils.js';

const gameInstruction = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2) === 0;

const generateRounds = () => {
  const min = 0;
  const max = 22;

  const rounds = [];

  for (let i = 0; i < numOfRounds; i += 1) {
    const question = generateNum(min, max);
    const correctAnsewr = isEven(question) ? 'yes' : 'no';
    rounds.push([correctAnsewr, question]);
  }
  return rounds;
};

const rounds = generateRounds();

export default () => executeGame(rounds, gameInstruction);

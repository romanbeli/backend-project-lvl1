import executeGame, { numOfRounds } from '../index.js';
import { generateNum } from '../utils.js';

const gameInstruction = 'What is the result of the expression?';

const generateRounds = () => {
  const rounds = [];
  const operations = ['+', '-', '*'];

  for (let i = 0; i < numOfRounds; i += 1) {
    const min = 0;
    const max = 9;

    const a = generateNum(min, max);
    const b = generateNum(min, max);

    const maxOperationsIndex = operations.length - 1;
    const operationsElementIndex = generateNum(0, maxOperationsIndex);

    const operation = operations[operationsElementIndex];

    let operationResult;
    if (operation === '+') {
      operationResult = a + b;
    } else if (operation === '-') {
      operationResult = a - b;
    } else operationResult = a * b;

    const question = `${a} ${operation} ${b}`;
    const correctAnswer = String(operationResult);

    rounds.push([correctAnswer, question]);
  }
  return rounds;
};

const rounds = generateRounds();

export default () => executeGame(rounds, gameInstruction);

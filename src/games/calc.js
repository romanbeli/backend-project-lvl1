import executeGame from '../index.js';
import { generateNum } from '../utils.js';

const gameInstruction = 'What is the result of the expression?';

const generateRounds = () => {
  const rounds = [];
  for (let i = 0; i < 3; i += 1) {
    const min = 0;
    const max = 9;

    const a = generateNum(min, max);
    const b = generateNum(min, max);

    const expresions = [[a + b, `${a} + ${b}`], [a - b, `${a} - ${b}`], [a * b, `${a} * ${b}`]];
    const maxExpresioIndex = expresions.length - 1;

    const expresionIndex = generateNum(min, maxExpresioIndex);
    const [expresionResult, question] = expresions[expresionIndex];
    const correctAnswer = String(expresionResult);

    rounds.push([correctAnswer, question]);
  }
  return rounds;
};

const rounds = generateRounds();

export default () => executeGame(rounds, gameInstruction);

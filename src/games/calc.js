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
    const expressions = [[a + b, `${a} + ${b}`], [a - b, `${a} - ${b}`], [a * b, `${a} * ${b}`]]; //
    const maxExpressioIndex = expressions.length - 1;
    const expressionIndex = generateNum(min, maxExpressioIndex);
    const [expressionResult, question] = expressions[expressionIndex];
    const correctAnswer = String(expressionResult);
    rounds.push([correctAnswer, question]);
  }
  return rounds;
};

const rounds = generateRounds();

export default () => executeGame(rounds, gameInstruction);

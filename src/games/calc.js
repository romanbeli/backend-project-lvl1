import executeGame from '../index.js';
import generateNum from '../utils.js';

const gameInstruction = 'What is the result of the expression?';

const generateRounds = () => {
  // let a;
  // let b;
  // const expressions = [[a + b, `${a} + ${b}`], [a - b, `${a} - ${b}`], [a * b, `${a} * ${b}`]];
  const rounds = [];
  for (let i = 0; i < 3; i += 1) {
    const downLimit = 0;
    const upLimit = 9;
    const a = generateNum(downLimit, upLimit); //
    const b = generateNum(downLimit, upLimit); //
    const expressions = [[a + b, `${a} + ${b}`], [a - b, `${a} - ${b}`], [a * b, `${a} * ${b}`]]; //
    const expressionIndex = generateNum(downLimit, expressions.length);
    const [expressionResult, question] = expressions[expressionIndex];
    const correctAnswer = String(expressionResult);
    rounds[i] = [correctAnswer, question];
  }
  return rounds;
};
const rounds = generateRounds();

export default () => executeGame(rounds, gameInstruction);

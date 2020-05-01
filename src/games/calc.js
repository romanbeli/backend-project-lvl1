import gameExecuting from '../index.js';
import getRandom from '../utils.js';

const gameInstruction = 'What is the result of the expression?';

const playGame = () => {
  const operandLimit = 9;
  const raunds = [];
  for (let i = 0; i < 3; i += 1) {
    const a = getRandom(operandLimit);
    const b = getRandom(operandLimit);
    const availableExpressions = [a + b, a - b, a * b];
    const expressionsForDisplay = [`${a} + ${b}`, `${a} - ${b}`, `${a} * ${b}`];
    const randomArrIndex = getRandom(availableExpressions.length);
    const resaulOfExpression = String(availableExpressions[randomArrIndex]);
    const expressionForQestion = expressionsForDisplay[randomArrIndex];
    raunds[i] = [resaulOfExpression, expressionForQestion];
  }
  gameExecuting(raunds, gameInstruction);
};
export default playGame;

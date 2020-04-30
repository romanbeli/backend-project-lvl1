import { random, gameExecute } from '../index.js';

const calculateExpression = () => {
  const operandLimit = 99;
  const arrayOfAnswer = [];
  const arrayOfQestion = [];
  const gameInstruction = 'What is the result of the expression?';
  for (let i = 0; i < 3; i += 1) {
    const a = random(operandLimit);
    const b = random(operandLimit);
    const availableExpressions = [a + b, a - b, a * b];
    const expressionsForDisplay = [`${a} + ${b}`, `${a} - ${b}`, `${a} * ${b}`];
    const randomArrIndex = random(availableExpressions.length);
    const resaulOfExpression = availableExpressions[randomArrIndex];
    const expressionForQestion = expressionsForDisplay[randomArrIndex];
    arrayOfAnswer[i] = resaulOfExpression;
    arrayOfQestion[i] = expressionForQestion;
  }
  gameExecute(arrayOfAnswer, arrayOfQestion, gameInstruction);
};
export default calculateExpression;

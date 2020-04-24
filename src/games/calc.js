import { random } from '../index.js';

const calculateExpression = () => {
  const operandLimit = 99;
  const a = random(operandLimit);
  const b = random(operandLimit);
  const availableExpressions = [a + b, a - b, a * b];
  const expressionsForDisplay = [`${a} + ${b}`, `${a} - ${b}`, `${a} * ${b}`];
  const randomArrIndex = random(availableExpressions.length);
  const randomExpression = availableExpressions[randomArrIndex];
  console.log(randomExpression);
  const randomExpressionForDisplay = expressionsForDisplay[randomArrIndex];
  const dataArr = [randomExpression, randomExpressionForDisplay];
  return dataArr;
};
export default calculateExpression;

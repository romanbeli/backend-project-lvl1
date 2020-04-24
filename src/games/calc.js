import { random, getInfoFromUser } from '../index.js';

const calc = () => {
  const operandLimit = 99;
  const a = random(operandLimit);
  const b = random(operandLimit);
  const availableExpressions = [a + b, a - b, a * b];
  const expressionsForDisplay = [`${a} + ${b}`, `${a} - ${b}`, `${a} * ${b}`];
  const arrIndexLimit = availableExpressions.length;
  const randomArrIndex = random(arrIndexLimit);
  const randomExpression = availableExpressions[randomArrIndex];
  console.log(randomExpression);
  const randomExpressionForDisplay = expressionsForDisplay[randomArrIndex];
  console.log(`Question: ${randomExpressionForDisplay}`);
  const stringAnswer = (getInfoFromUser('Your answer: '));
  const numericAnswer = Number(stringAnswer);
  console.log(numericAnswer);
  const dataArr = [randomExpression, numericAnswer, stringAnswer];
  return dataArr;
};
export default calc;

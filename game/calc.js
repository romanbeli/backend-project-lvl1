import { getName, random, getInfoFromUser } from '../src/index.js';

const calc = (gameInstruction) => {
  const name = getName(gameInstruction);

  const operandLimit = 99;
  const arrIndexLimit = 3;
  // const randomArrElem = random(arrIndexLimit);
  // const availableExpression = [a + b, a - b, a * b];
  // const expressionForDisplay = [`${a} + ${b}`, `${a} - ${b}`, `${a} * ${b}`];

  for (let count = 1; count < 4; count += 1) {
    const a = random(operandLimit);
    const b = random(operandLimit);
    const availableExpression = [a + b, a - b, a * b];
    const expressionForDisplay = [`${a} + ${b}`, `${a} - ${b}`, `${a} * ${b}`];
    const randomArrIndex = random(arrIndexLimit);
    const randomExpression = availableExpression[randomArrIndex];
    console.log(randomExpression);
    const randomExpressionForDisplay = expressionForDisplay[randomArrIndex];
    console.log(`Question: ${randomExpressionForDisplay}`);
    const stringAnswer = (getInfoFromUser('Your answer: '));
    const answer = Number(stringAnswer);
    console.log(answer);
    if (randomExpression !== answer) {
      return console.log(`"${stringAnswer}" is wrong answer ;(. Correct answer was "${randomExpression}"\nLet's try again, ${name}!`);
    } if (count === 3) {
      return console.log(`Correct!\nCongratulations, ${name}!`);
    } console.log('Correct!');
  }
  return true; // - ???????????? did it just for linter
};

export default calc;

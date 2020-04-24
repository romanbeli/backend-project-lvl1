import { random } from '../index.js';

const progression = () => {
  const lengthArr = 10;
  const maxFirsElem = 99;
  const firstElem = random(maxFirsElem);
  const step = random(maxFirsElem);
  const resaultArr = [firstElem];
  for (let index = 1; index < lengthArr; index += 1) {
    resaultArr[index] = resaultArr[index - 1] + step;
  }
  const delitingIndex = random(lengthArr);
  const prepArr = [...resaultArr];
  prepArr[delitingIndex] = '..';
  const correctAnswer = resaultArr[delitingIndex];
  console.log(correctAnswer);
  const resaultStructure = [correctAnswer, prepArr];
  return resaultStructure;
};
export default progression;

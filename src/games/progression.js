import { random, gameExecute } from '../index.js';

const repairProgression = () => {
  const gameInstruction = 'What number is missing in the progression?';
  const lengthArr = 10;
  const maxFirsElem = 99;
  const arrayOfAnswer = [];
  const arrayOfQuestion = [];
  for (let i = 0; i < 3; i += 1) {
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
    arrayOfAnswer[i] = correctAnswer;
    arrayOfQuestion[i] = prepArr;
  }
  gameExecute(arrayOfAnswer, arrayOfQuestion, gameInstruction);
};
export default repairProgression;

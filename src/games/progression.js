import gameExecuting from '../index.js';
import getRandom from '../utils.js';

const gameInstruction = 'What number is missing in the progression?';
const lengthArr = 10;
const maxFirsElem = 9;

const generateProgression = (firstElem, step) => {
  const resaultArr = [firstElem];
  for (let index = 1; index < lengthArr; index += 1) {
    resaultArr[index] = resaultArr[index - 1] + step;
  }
  return resaultArr;
};

const playGame = () => {
  const raunds = [];
  for (let i = 0; i < 3; i += 1) {
    const firstElem = getRandom(maxFirsElem);
    const step = getRandom(maxFirsElem);
    const delitingIndex = getRandom(lengthArr);
    const progression = generateProgression(firstElem, step);
    const prepArr = [...progression];
    prepArr[delitingIndex] = '..';
    const correctAnswer = String(progression[delitingIndex]);
    raunds[i] = [correctAnswer, prepArr];
  }
  gameExecuting(raunds, gameInstruction);
};
export default playGame;

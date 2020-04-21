import { getName, random, getInfoFromUser } from '../src/index.js';

const progression = (gameInstruction) => {
  const name = getName(gameInstruction);

  const whollArr = (maxFirsElem, length) => {
    const firstElem = random(maxFirsElem);
    const step = random(maxFirsElem);
    const resaultArr = [firstElem];
    for (let index = 1; index < length; index += 1) {
      resaultArr[index] = resaultArr[index - 1] + step;
    }
    return resaultArr;
  };
  const prepArr = (fullArr, delitingIndex) => {
    const arr = [...fullArr];
    arr[delitingIndex] = '..';
    return arr;
  };
  const lengthArr = 10;
  const maxFirsElemArr = 99;
  for (let count = 1; count < 4; count += 1) {
    const uncutArr = whollArr(maxFirsElemArr, lengthArr);
    const index = random(lengthArr);
    const cutArr = prepArr(uncutArr, index);
    console.log(`Question: ${cutArr}`);
    const deletedElem = uncutArr[index];
    console.log(deletedElem);
    const answear = Number(getInfoFromUser('Your answer: '));
    if (deletedElem !== answear) return console.log(`"${answear}" is wrong answer ;(. Correct answer was "${deletedElem}"`);
    if (count === 3) return console.log(`Correct!\nCongratulations, ${name}!`);
    console.log('Correct!');
  }
  return true;
};
export default progression;

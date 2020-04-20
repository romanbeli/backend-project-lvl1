import { getName, random, getInfoFromUser } from '../src/index.js';

const isItEven = (gameInstruction) => {
  const name = getName(gameInstruction);
  for (let count = 1; count < 4; count += 1) {
    const limit = 111111;
    const actualRandom = random(limit);
    console.log(`Question: ${actualRandom}`);
    const checkEven = actualRandom % 2;
    const frase = 'Your answer: ';
    const actualAnswer = getInfoFromUser(frase);
    if ((checkEven === 0 && actualAnswer !== 'yes') || (checkEven !== 0 && actualAnswer !== 'no')) {
      return console.log(`Let's try again, ${name}!`);
    } if (count === 3) {
      return console.log(`Correct!\nCongratulations, ${name}!`);
    } console.log('Correct!');
  }
  return true; // - ???????????? did it just for linter
};
export default isItEven;

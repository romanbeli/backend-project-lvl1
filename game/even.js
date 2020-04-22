import { getName, random, getInfoFromUser } from '../src/index.js';

const isItEven = (gameInstruction) => {
  const name = getName(gameInstruction);

  const even = (num) => {
    let resault = '';
    const diviseResault = num % 2;
    if (diviseResault === 0) resault = 'yes';
    if (diviseResault !== 0) resault = 'no';
    return resault;
  };

  for (let count = 1; count < 4; count += 1) {
    const limit = 111111;
    const actualRandom = random(limit);
    console.log(`Question: ${actualRandom}`);
    const frase = 'Your answer: ';
    const actualAnswer = getInfoFromUser(frase);
    const corectAnswer = even(actualRandom);
    if (actualAnswer !== corectAnswer) {
      return console.log(`"${actualAnswer}" is wrong answer ;(. Correct answer was "${corectAnswer}".\nLet's try again, ${name}!`);
    } if (count === 3) {
      return console.log(`Correct!\nCongratulations, ${name}!`);
    } console.log('Correct!');
  }
  return true; // - ???????????? did it just for linter
};
export default isItEven;

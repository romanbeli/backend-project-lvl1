import getName from './index.js';
import readlines from 'readline-sync';

const random = () => Math.floor(Math.random() * Math.floor(111));

const isItEven = () => {
  const name = getName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let count = 1; count < 4; count += 1) {
    const actualRandom = random();
    console.log(`Question: ${actualRandom}`);
    const checkEven = actualRandom % 2;
    const actualAnswer = readlines.question('Your answer: ');
    if ((checkEven === 0 && actualAnswer !== 'yes') || (checkEven !== 0 && actualAnswer !== 'no')) {
      return console.log(`Let's try again, ${name}!`);
    } else if (count === 3) {
      return console.log(`Correct!\nCongratulations, ${name}!`);
    } console.log('Correct!');
  }
  return console.log('nothing to returnnn');
};
export default isItEven;

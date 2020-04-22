import { getName, random, getInfoFromUser } from '../src/index.js';

const prime = (gameInstruction) => {
  const name = getName(gameInstruction);
  const isItPrime = (num) => {
    if (num === 1 || num === 0) return 'yes';
    let resault;
    for (let divisor = num - 1; divisor > 0; divisor -= 1) {
      const diviseResault = num % divisor;
      if (diviseResault === 0 && divisor !== 1) {
        resault = 'no';
        break;
      } else if (diviseResault === 0 && divisor === 1) {
        resault = 'yes';
        break;
      }
    }
    return resault;
  };
  for (let count = 1; count < 4; count += 1) {
    const limit = 27;
    const num = random(limit);
    const correctAnswer = isItPrime(num);
    console.log(`Question: ${num}`);
    console.log(correctAnswer);
    const userAnswer = getInfoFromUser('Answer: ');
    if (correctAnswer !== userAnswer) return console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}"\nLet's try again, ${name}!`);
    if (count === 3) return console.log(`Correct!\nCongratulations, ${name}!`);
    console.log('Correct!');
  }
  return true;
};
export default prime;

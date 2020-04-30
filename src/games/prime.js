import { random, gameExecute } from '../index.js';

const checkForPrime = () => {
  const gameInstruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const limit = 111;
  const arrayOfAnswer = [];
  const arrayOfQestion = [];
  for (let i = 0; i < 3; i += 1) {
    const num = random(limit) + 1;
    let correctAnswer;
    if (num === 1) correctAnswer = 'yes';
    for (let divisor = Math.floor(num / 2); divisor > 0; divisor -= 1) {
      const diviseResault = num % divisor;
      if (diviseResault === 0 && divisor !== 1) {
        correctAnswer = 'no';
        break;
      } else if (diviseResault === 0 && divisor === 1) {
        correctAnswer = 'yes';
        break;
      }
    }
    arrayOfAnswer[i] = correctAnswer;
    arrayOfQestion[i] = num;
  }
  gameExecute(arrayOfAnswer, arrayOfQestion, gameInstruction);
};
export default checkForPrime;

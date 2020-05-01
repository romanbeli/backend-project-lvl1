import gameExecute from '../index.js';
import getRandom from '../utils.js';

const gameInstruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  let correctAnswer;
  if (num === 1) return 'yes';
  for (let divisor = Math.floor(num / 2); divisor > 0; divisor -= 1) {
    const diviseResault = num % divisor;
    if (diviseResault === 0 && divisor !== 1) {
      correctAnswer = false;
      break;
    } if (diviseResault === 0 && divisor === 1) {
      correctAnswer = true;
      break;
    }
  }
  return correctAnswer;
};

const playGame = () => {
  const limit = 22;
  const raunds = [];

  for (let i = 0; i < 3; i += 1) {
    const num = getRandom(limit) + 1;
    const resault = (isPrime(num)) ? 'yes' : 'no';
    raunds[i] = [resault, num];
  }
  gameExecute(raunds, gameInstruction);
};
export default playGame;

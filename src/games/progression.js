import executeGame from '../index.js';
import generateNum from '../utils.js';

const gameInstruction = 'What number is missing in the progression?';

const progressionLength = 10;
const maxFirstElemOfProgression = 9;

const generateProgression = (firstElem, step) => {
  const progression = [];
  for (let index = 1; index < progressionLength; index += 1) {
    progression[0] = firstElem;
    progression[index] = progression[index - 1] + step;
  }
  return progression;
};

const generateQuestion = (progression, hiddenIndex) => {
  const prepProgression = progression;
  prepProgression[hiddenIndex] = '..';
  return prepProgression;
};

const playGame = () => {
  const rounds = [];
  for (let i = 0; i < 3; i += 1) {
    const downLimit = 0;
    const firstElem = generateNum(downLimit, maxFirstElemOfProgression);
    const step = generateNum(downLimit, maxFirstElemOfProgression);
    const hiddenIndex = generateNum(downLimit, progressionLength);
    const progression = generateProgression(firstElem, step);
    const correctAnswer = String(progression[hiddenIndex]);
    const question = generateQuestion(progression, hiddenIndex);
    rounds[i] = [correctAnswer, question];
  }
  return rounds;
};
const rounds = playGame();

export default () => executeGame(rounds, gameInstruction);

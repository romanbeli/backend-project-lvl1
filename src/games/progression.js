import executeGame from '../index.js';
import { generateNum } from '../utils.js';

const gameInstruction = 'What number is missing in the progression?';

const progressionLength = 10;

const generateProgression = (firstElem, step) => {
  const progression = [];

  for (let index = 0; index < progressionLength; index += 1) {
    progression.push(firstElem + step * index);
  }
  return progression;
};

const generateQuestion = (progression, hiddenIndex) => {
  const prepProgression = [...progression];
  prepProgression[hiddenIndex] = '..';

  return prepProgression;
};

const generateRounds = () => {
  const rounds = [];

  for (let i = 0; i < 3; i += 1) {
    const min = 0;
    const maxFirstElemOfProgression = 9;
    const maxIndexOfProgresson = progressionLength - 1;
    const maxStepOfProgeression = 9;

    const firstElem = generateNum(min, maxFirstElemOfProgression);
    const step = generateNum(min, maxStepOfProgeression);
    const hiddenIndex = generateNum(min, maxIndexOfProgresson);
    const progression = generateProgression(firstElem, step);

    const correctAnswer = String(progression[hiddenIndex]);
    const question = generateQuestion(progression, hiddenIndex);

    rounds.push([correctAnswer, question]);
  }
  return rounds;
};

const rounds = generateRounds();

export default () => executeGame(rounds, gameInstruction);

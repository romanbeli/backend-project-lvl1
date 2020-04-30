import readlineSyn from 'readline-sync';

const getInfoFromUser = (frase) => readlineSyn.question(`${frase}`);
const random = (limit) => Math.floor(Math.random() * limit);

const gameExecute = (correct, question, gameInstruction) => {
  console.log('Welcome to the Brain Games!');
  const name = getInfoFromUser('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameInstruction);
  const count = correct.length;
  for (let i = 0; i < count; i += 1) {
    // const showQuestion = question[i];
    console.log(`Question: ${question[i]}`);
    console.log(correct[i]);
    const stringAnswer = getInfoFromUser('Your answer: ');
    // if (`${Number(stringAnswer)}` === 'NaN') numericAnswer = stringAnswer;
    // if (`${Number(stringAnswer)}` !== 'NaN') numericAnswer = Number(stringAnswer);
    const userAnswer = (Number.isNaN(Number(stringAnswer))) ? stringAnswer : Number(stringAnswer);
    if (correct[i] !== userAnswer) return console.log(`"${stringAnswer}" is wrong answer ;(. Correct answer was "${correct[i]}"\nLet's try again, ${name}!`);
    if (i === count - 1) return console.log(`Correct!\nCongratulations, ${name}!`);
    console.log('Correct!');
  }
  return true;
};
export { random, getInfoFromUser, gameExecute };

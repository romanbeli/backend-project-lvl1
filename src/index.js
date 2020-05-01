import readlineSync from 'readline-sync';

const getInfoFromUser = (frase) => readlineSync.question(`${frase}`);

const gameExecuting = (raunds, gameInstruction) => {
  console.log('Welcome to the Brain Games!');
  const name = getInfoFromUser('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameInstruction);
  const count = raunds.length;
  for (let i = 0; i < count; i += 1) {
    const [correctAnswer, qestion] = raunds[i];
    console.log(`Question: ${qestion}`);
    const userAnswer = getInfoFromUser('Your answer: ');
    if (correctAnswer !== userAnswer) return console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}"\nLet's try again, ${name}!`);
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${name}!`);
};
export { getInfoFromUser };
export default gameExecuting;

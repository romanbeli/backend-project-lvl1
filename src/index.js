import readlineSync from 'readline-sync';

const getInfoFromUser = (frase) => readlineSync.question(`${frase}`);

export default (rounds, gameInstruction) => {
  console.log('Welcome to the Brain Games!');
  const name = getInfoFromUser('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameInstruction);
  const count = rounds.length;
  for (let i = 0; i < count; i += 1) {
    const [correctAnswer, question] = rounds[i];
    console.log(`Question: ${question}`);
    const userAnswer = getInfoFromUser('Your answer: ');
    if (correctAnswer !== userAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export { getInfoFromUser };

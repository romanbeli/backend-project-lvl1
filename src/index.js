import readlineSyn from 'readline-sync';
//
const getInfoFromUser = (frase) => readlineSyn.question(`${frase}`);
const random = (limit) => Math.floor(Math.random() * limit);

const gameExecute = (correct, question, gameInstruction) => {
  console.log('Welcome to the Brain Games!');
  const name = getInfoFromUser('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameInstruction);
  //
  for (let count = 1; count < 4; count += 1) {
    // const dataArr = gameFunction();
    console.log(`Question: ${question}`);
    let numericAnswer;
    const stringAnswer = getInfoFromUser('Your answer: ');
    if (`${Number(stringAnswer)}` === 'NaN') numericAnswer = stringAnswer;
    if (`${Number(stringAnswer)}` !== 'NaN') numericAnswer = Number(stringAnswer);
    if (correct !== numericAnswer) return console.log(`"${stringAnswer}" is wrong answer ;(. Correct answer was "${correct}"\nLet's try again, ${name}!`);
    if (count === 3) return console.log(`Correct!\nCongratulations, ${name}!`);
    console.log('Correct!');
  }
  return true;
};
export { random, getInfoFromUser, gameExecute };

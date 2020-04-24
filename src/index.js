import readlineSyn from 'readline-sync';
//
const getInfoFromUser = (frase) => readlineSyn.question(`${frase}`);
const random = (limit) => Math.floor(Math.random() * limit);

const gameFlow = (gameFunction, gameInstruction) => {
  console.log('Welcome to the Brain Games!');
  const name = getInfoFromUser('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameInstruction);
  //
  for (let count = 1; count < 4; count += 1) {
    const dataArr = gameFunction();
    console.log(`Question: ${dataArr[3]}`);
    let numericAnswer;
    const stringAnswer = getInfoFromUser('Your answer: ');
    if (`${Number(stringAnswer)}` === 'NaN') numericAnswer = stringAnswer;
    if (`${Number(stringAnswer)}` !== 'NaN') numericAnswer = Number(stringAnswer);
    if (dataArr[0] !== numericAnswer) return console.log(`"${stringAnswer}" is wrong answer ;(. Correct answer was "${dataArr[0]}"\nLet's try again, ${name}!`);
    if (count === 3) return console.log(`Correct!\nCongratulations, ${name}!`);
    console.log('Correct!');
  }
  return true;
};
export { random, getInfoFromUser, gameFlow };

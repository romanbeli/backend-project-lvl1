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
    // console.log(`Question: ${dataArr[3]}`);
    // const stringAnswer = getInfoFromUser('Your answer: ');
    if (dataArr[0] !== dataArr[1]) return console.log(`"${dataArr[2]}" is wrong answer ;(. Correct answer was "${dataArr[0]}"\nLet's try again, ${name}!`);
    if (count === 3) return console.log(`Correct!\nCongratulations, ${name}!`);
    console.log('Correct!');
  }
  return true;
};
export { random, getInfoFromUser, gameFlow };

import readlineSyn from 'readline-sync';

// Common exported functions:
const getInfoFromUser = (frase) => readlineSyn.question(`${frase}`);

const getName = (gameInstruction) => {
  console.log('Welcome to the Brain Games!');
  const frase = 'May I have your name? ';
  const name = getInfoFromUser(frase);
  console.log(`Hello, ${name}!`);
  console.log(gameInstruction);
  return name;
};

const random = (limit) => Math.floor(Math.random() * limit);

// Common game script:
/*

*/

export { getName, random, getInfoFromUser };

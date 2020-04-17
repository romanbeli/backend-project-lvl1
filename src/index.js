import readlineSyn from 'readline-sync';

const getName = () => {
  const name = readlineSyn.question('May I have your name?');
  console.log(`Hello, ${name}!`);
};
export default getName;

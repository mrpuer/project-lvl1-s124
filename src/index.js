import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!\n');

const getName = readlineSync.question('May I have your name? ');
export default getName;

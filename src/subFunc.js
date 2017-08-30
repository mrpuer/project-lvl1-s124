import readlineSync from 'readline-sync';

export const welcomeMsg = () => console.log('Welcome to the Brain Games!\n');
export const correctMsg = () => console.log('Correct!');
export const sendQuest = sysValue => console.log(`Question: ${sysValue}`);
export const printCongrat = gamerName => console.log(`Congratulations, ${gamerName}`);
export const printError = (userAnsw, checkAnsw) => console.log(`${userAnsw} is wrong answer ;(. Correct answer was ${checkAnsw}.`);
export const makeRandNum = (min, max) => {
  const rand = Math.floor((min + Math.random()) * ((max + 1) - min));
  return rand;
};
export const getNameFunc = () => readlineSync.question('May I have your name? ');
export const askUser = () => readlineSync.question('Your answer: ');

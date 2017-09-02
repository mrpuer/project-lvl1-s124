import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const printWelcome = () => console.log('Welcome to the Brain Games!\n');
const printCorrect = () => console.log('Correct!');
const printQuestion = sysValue => console.log(`Question: ${sysValue}`);
const printHello = toUser => console.log(`Hello, ${toUser}!`);
const printWin = gamerName => console.log(`Congratulations, ${gamerName}`);
const printError = (userAnsw, checkAnsw) => console.log(`${userAnsw} is wrong answer ;(. Correct answer was ${checkAnsw}.`);
const askName = () => readlineSync.question('May I have your name? ');
const askAnswer = (item) => {
  const answer = readlineSync.question('Your answer: ');
  return (typeof item === 'number') ? +answer : answer;
};
const welcomeGame = (getRules) => {
  printWelcome();
  if (getRules) {
    console.log(getRules);
  }
};

const makeGame = (gameRules, gameData) => {
  welcomeGame(gameRules);
  const getName = askName();
  printHello(getName);
  if (gameRules === '') {
    return;
  }
  const startGame = (count) => {
    const currentData = gameData();
    const currentQuestion = car(currentData);
    const currentAnswer = cdr(currentData);
    printQuestion(currentQuestion);
    const userAnswer = askAnswer(currentAnswer);
    if (currentAnswer !== userAnswer) {
      return printError(userAnswer, currentAnswer);
    }
    printCorrect();
    if (count === 1) {
      return printWin(getName);
    }
    return startGame(count - 1);
  };
  startGame(3);
};
export default makeGame;

import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const welcomeMsg = () => console.log('Welcome to the Brain Games!\n');
const correctMsg = () => console.log('Correct!');
const printQuestion = sysValue => console.log(`Question: ${sysValue}`);
const printHello = toUser => console.log(`Hello, ${toUser}!`);
const printCongrat = gamerName => console.log(`Congratulations, ${gamerName}`);
const printError = (userAnsw, checkAnsw) => console.log(`${userAnsw} is wrong answer ;(. Correct answer was ${checkAnsw}.`);
const askName = () => readlineSync.question('May I have your name? ');
const askAnswer = () => readlineSync.question('Your answer: ');
const welcomeGame = (getRules) => {
  welcomeMsg();
  if (getRules) {
    console.log(getRules);
  }
};

const makeGame = (gameRules, gameData, i) => {
  welcomeGame(gameRules);
  const getName = askName();
  printHello(getName);
  if (i === 0) {
    return '';
  }
  const startGame = (getName2, count) => {
    const currentData = gameData();
    const currentQuestion = car(currentData);
    const currentAnswer = cdr(currentData);
    printQuestion(currentQuestion);
    const userAnswer = (typeof currentAnswer === 'number') ? +askAnswer() : askAnswer();
    if (currentAnswer !== userAnswer) {
      return printError(userAnswer, currentAnswer);
    }
    correctMsg();
    if (count === 1) {
      return printCongrat(getName2);
    }
    return startGame(getName, count - 1);
  };
  return startGame(getName, i);
};
export default makeGame;

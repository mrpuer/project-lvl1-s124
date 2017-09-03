import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const printWelcome = 'Welcome to the Brain Games!';
const printCorrect = () => console.log('Correct!');
const printQuestion = sysValue => console.log(`Question: ${sysValue}`);
const printHello = toUser => console.log(`Hello, ${toUser}!`);
const printWin = gamerName => console.log(`Congratulations, ${gamerName}`);
const printError = (userAnsw, checkAnsw, person) => {
  console.log(`${userAnsw} is wrong answer ;(. Correct answer was ${checkAnsw}.`);
  console.log(`Let's try again, ${person}!`);
};
const askName = () => readlineSync.question('May I have your name? ');
const askAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};
const welcomeGame = (getRules) => {
  console.log(printWelcome);
  if (getRules) {
    console.log(`${getRules}\n`);
  }
};

const makeGame = (gameRules, gameData) => {
  welcomeGame(gameRules);
  const getName = askName();
  printHello(getName);
  if (gameData) {
    const startGame = (count) => {
      const currentData = gameData();
      const currentQuestion = car(currentData);
      const currentAnswer = cdr(currentData);
      printQuestion(currentQuestion);
      const userAnswer = askAnswer();
      if (currentAnswer !== userAnswer) {
        return printError(userAnswer, currentAnswer, getName);
      }
      printCorrect();
      if (count === 1) {
        return printWin(getName);
      }
      return startGame(count - 1);
    };
    startGame(3);
  }
};
export default makeGame;

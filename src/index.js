import readlineSync from 'readline-sync';

const welcomeMsg = () => console.log('Welcome to the Brain Games!\n');
const correctMsg = () => console.log('Correct!');
const printQuestion = sysValue => console.log(`Question: ${sysValue}`);
const printHello = toUser => console.log(`Hello, ${toUser}!`);
const printCongrat = gamerName => console.log(`Congratulations, ${gamerName}`);
const printError = (userAnsw, checkAnsw) => console.log(`${userAnsw} is wrong answer ;(. Correct answer was ${checkAnsw}.`);
const askName = () => readlineSync.question('May I have your name? ');
const askAnswer = () => readlineSync.question('Your answer: ');
const endGame = (someCount, someGetName, someCheckAnswer, someUserAnswer) => {
  if (someCount === 1) {
    return printCongrat(someGetName);
  } else if (someCheckAnswer !== someUserAnswer) {
    return printError(someUserAnswer, someCheckAnswer);
  }
  return correctMsg();
};

const welcomeGame = (getRules) => {
  welcomeMsg();
  if (getRules) {
    console.log(getRules);
  }
};

export const makeGame = (gameRules, gameData, gameQuestion, gameAnswer, i) => {
  welcomeGame(gameRules);
  const getName = askName();
  printHello(getName);
  if (i !== 0 ) {
    const startGame = (getName2, count) => {
      const curretData = gameData();
      const currentQuestion = gameQuestion(curretData);
      const currentAnswer = gameAnswer(curretData);
      printQuestion(currentQuestion);
      const userAnswer = (typeof currentAnswer === 'number') ? +askAnswer() : askAnswer()
      endGame(count, getName2, currentAnswer, userAnswer);
      if ((count !== 1) && (currentAnswer === userAnswer)) {
        return startGame(getName2, count - 1);
      }
    };

    return startGame(getName, i);
  }
}

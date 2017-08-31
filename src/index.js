import readlineSync from 'readline-sync';

export const welcomeMsg = () => console.log('Welcome to the Brain Games!\n');
export const correctMsg = () => console.log('Correct!');
export const printQuestion = sysValue => console.log(`Question: ${sysValue}`);
export const printHello = toUser => console.log(`Hello, ${toUser}!`);
export const printCongrat = gamerName => console.log(`Congratulations, ${gamerName}`);
export const printError = (userAnsw, checkAnsw) => console.log(`${userAnsw} is wrong answer ;(. Correct answer was ${checkAnsw}.`);
export const askName = () => readlineSync.question('May I have your name? ');
export const askAnswer = () => readlineSync.question('Your answer: ');
export const endGame = (someCount, someGetName, someCheckAnswer, someUserAnswer) => {
  if (someCount === 1) {
    return printCongrat(someGetName);
  } else if (someCheckAnswer !== someUserAnswer) {
    return printError(someUserAnswer, someCheckAnswer);
  }
  return correctMsg();
};

export const welcomeGame = (getRules) => {
  welcomeMsg();
  if (getRules) {
    console.log(getRules);
  }
};

export const makeGame = (gameRules, gameQuestion, gameAnswer, i) => {
  welcomeGame(gameRules);
  const getName = askName();
  printHello(getName);
  const startGame = (getName2, count) => {
    const currentQuestion = gameQuestion();
    const currentAnswer = gameAnswer();
    printQuestion(currentQuestion);
    const userAnswer = +askAnswer();
    endGame(count, getName2, currentAnswer, userAnswer);
    if ((count !== 1) && (currentAnswer === userAnswer)) {
      return startGame(getName2, count - 1);
    }
  };

  return startGame(getName, i);
}

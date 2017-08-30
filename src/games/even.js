import { startGame, endGame, makeRandNum, askUser, sendQuest, getNameFunc, printHello } from '../';

const evenGame = (rules, i) => {
  startGame(rules);
  const getName = getNameFunc();
  printHello(getName);
  const gameBody = (count) => {
    const curDigit = makeRandNum(1, 99);
    sendQuest(curDigit);
    const userAnsw = askUser();
    const checkAnsw = curDigit % 2 === 0 ? 'yes' : 'no';
    endGame(count, getName, checkAnsw, userAnsw);
    if ((count !== 1) && (checkAnsw === userAnsw)) {
      gameBody(count - 1);
    }
  };

  return gameBody(i);
};
export default evenGame;

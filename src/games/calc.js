import { startGame, endGame, makeRandNum, askUser, sendQuest, getNameFunc, printHello } from '../';

const calcGame = (rules, i) => {
  startGame(rules);
  const getName = getNameFunc();
  printHello(getName);
  const gameBody = (count) => {
    const curDigit1 = makeRandNum(1, 99);
    const curDigit2 = makeRandNum(1, 99);
    const signs = ['+', '-', '*'];
    const curSign = signs[makeRandNum(0, 2)];
    const makeQuestion = `${curDigit1} ${curSign} ${curDigit2}`;
    sendQuest(makeQuestion);
    const userAnsw = +askUser();
    let checkAnsw = 0;
    if (curSign === '+') {
      checkAnsw = curDigit1 + curDigit2;
    } else if (curSign === '-') {
      checkAnsw = curDigit1 - curDigit2;
    } else {
      checkAnsw = curDigit1 * curDigit2;
    }
    endGame(count, getName, checkAnsw, userAnsw);
    if ((count !== 1) && (checkAnsw === userAnsw)) {
      gameBody(count - 1);
    }
  };

  return gameBody(i);
};
export default calcGame;

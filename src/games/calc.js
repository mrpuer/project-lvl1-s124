import { makeRandNum, askUser, correctMsg, sendQuest, printCongrat, printError } from '../subFunc';

const calcGame = (i, gamerName) => {
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
  if (i === 1) {
    return printCongrat(gamerName);
  } else if (checkAnsw === userAnsw) {
    correctMsg();
    return calcGame(i - 1, gamerName);
  }
  return printError(userAnsw, checkAnsw);
};
export default calcGame;

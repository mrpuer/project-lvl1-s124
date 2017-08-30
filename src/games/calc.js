import { makeRandNum, askUser, sendQuest, funcFinish } from '../subFunc';

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
  funcFinish(i, gamerName, checkAnsw, userAnsw);
  if ((i !== 1) && (checkAnsw === userAnsw)) {
    calcGame(i - 1, gamerName);
  }
};
export default calcGame;

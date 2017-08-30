import { makeRandNum, askUser, correctMsg, sendQuest, printCongrat, printError } from '../subFunc';

const gcdGame = (i, gamerName) => {
  const curDigit1 = makeRandNum(1, 99);
  const curDigit2 = makeRandNum(1, 99);
  const makeQuest = `${curDigit1} ${curDigit2}`;
  sendQuest(makeQuest);
  const userAnsw = +askUser();
  const getGcd = (dig1, dig2) => {
    if (dig1 === dig2) {
      return dig1;
    }
    const biggest = dig2 > dig1 ? dig2 : dig1;
    const lowest = dig2 > dig1 ? dig1 : dig2;
    const iter = (newLow) => {
      if ((biggest % newLow === 0) && (lowest % newLow === 0)) {
        return newLow;
      }

      return iter(newLow - 1);
    };

    return iter(biggest, lowest);
  };

  const checkAnsw = getGcd(curDigit1, curDigit2);
  if (i === 1) {
    return printCongrat(gamerName);
  } else if (checkAnsw === userAnsw) {
    correctMsg();
    return gcdGame(i - 1, gamerName);
  }
  return printError(userAnsw, checkAnsw);
};
export default gcdGame;

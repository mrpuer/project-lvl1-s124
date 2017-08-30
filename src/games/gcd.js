import { makeRandNum, askUser, sendQuest, funcFinish } from '../subFunc';

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
  funcFinish(i, gamerName, checkAnsw, userAnsw);
  if ((i !== 1) && (checkAnsw === userAnsw)) {
    gcdGame(i - 1, gamerName);
  }
};
export default gcdGame;

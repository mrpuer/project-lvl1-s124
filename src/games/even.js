import { makeRandNum, askUser, correctMsg, sendQuest, printCongrat, printError } from '../subFunc';

const evenGame = (i, gamerName) => {
  const curDigit = makeRandNum(1, 99);
  sendQuest(curDigit);
  const userAnsw = askUser();
  const checkAnsw = curDigit % 2 === 0 ? 'yes' : 'no';
  if (i === 1) {
    return printCongrat(gamerName);
  } else if (checkAnsw === userAnsw) {
    correctMsg();
    return evenGame(i - 1, gamerName);
  }
  return printError(userAnsw, checkAnsw);
};
export default evenGame;

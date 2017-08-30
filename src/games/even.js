import { makeRandNum, askUser, sendQuest, funcFinish } from '../subFunc';

const evenGame = (i, gamerName) => {
  const curDigit = makeRandNum(1, 99);
  sendQuest(curDigit);
  const userAnsw = askUser();
  const checkAnsw = curDigit % 2 === 0 ? 'yes' : 'no';
  funcFinish(i, gamerName, checkAnsw, userAnsw);
  if ((i !== 1) && (checkAnsw === userAnsw)) {
    evenGame(i - 1, gamerName);
  }
};
export default evenGame;

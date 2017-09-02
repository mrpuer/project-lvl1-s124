import { cons } from 'hexlet-pairs';
import makeRandNum from '../utils';
import makeGame from '../';

const gcdGame = () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  const makeData = () => {
    const curDigit1 = makeRandNum(1, 99);
    const curDigit2 = makeRandNum(1, 99);
    const makeQuestion = `${curDigit1} ${curDigit2}`;
    const answer = () => {
      if (curDigit1 === curDigit2) {
        return curDigit1;
      }
      const biggest = curDigit2 > curDigit1 ? curDigit2 : curDigit1;
      const lowest = curDigit2 > curDigit1 ? curDigit1 : curDigit2;
      const iter = (newLow) => {
        if ((biggest % newLow === 0) && (lowest % newLow === 0)) {
          return newLow;
        }

        return iter(newLow - 1);
      };
      return iter(lowest);
    };
    const makeAnswer = answer();
    return cons(makeQuestion, makeAnswer);
  };

  return makeGame(rules, makeData);
};
export default gcdGame;

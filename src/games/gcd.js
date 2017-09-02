import { cons } from 'hexlet-pairs';
import makeRandNum from '../utils';
import makeGame from '../';

const gcdGame = () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  const makeData = () => {
    const curDigit1 = makeRandNum(1, 99);
    const curDigit2 = makeRandNum(1, 99);
    const makeQuestion = `${curDigit1} ${curDigit2}`;
    const answer = (num1, num2) => {
      if (num1 === num2) {
        return num1;
      }
      const biggest = num2 > num1 ? num2 : num1;
      const lowest = num2 > num1 ? num1 : num2;
      const iter = (newLow) => {
        if ((biggest % newLow === 0) && (lowest % newLow === 0)) {
          return newLow;
        }

        return iter(newLow - 1);
      };
      return iter(lowest);
    };
    const makeAnswer = answer(curDigit1, curDigit2);
    return cons(makeQuestion, makeAnswer);
  };

  return makeGame(rules, makeData);
};
export default gcdGame;

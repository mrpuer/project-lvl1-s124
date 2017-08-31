import makeRandNum from '../utils';
import { makeGame } from '../';

const gcdGame = (i) => {
  const rules = 'Find the greatest common divisor of given numbers.';
  const makeData = () => {
    const curDigit1 = makeRandNum(1, 99);
    const curDigit2 = makeRandNum(1, 99);
    return [curDigit1, curDigit2];
  };
  const makeQuestion = (arr) => {
    return `${arr[0]} ${arr[1]}`;
  };
  const makeAnswer = (arr) => {
    const dig1 = arr[0];
    const dig2 = arr[1];
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

    return iter(lowest);
  };

  makeGame(rules, makeData, makeQuestion, makeAnswer, i);
};
export default gcdGame;

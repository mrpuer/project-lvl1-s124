import { cons } from 'hexlet-pairs';
import { makeRandNum } from '../utils';
import makeGame from '../';

const calcGame = () => {
  const rules = 'What is the result of the expression?';
  const makeData = () => {
    const currrentDigit1 = makeRandNum(0, 99);
    const currrentDigit2 = makeRandNum(0, 99);
    const signs = ['+', '-', '*'];
    const currrentSign = signs[makeRandNum(0, 2)];
    const makeQuestion = `${currrentDigit1} ${currrentSign} ${currrentDigit2}`;
    const answer = () => {
      if (currrentSign === '+') {
        return currrentDigit1 + currrentDigit2;
      }
      if (currrentSign === '-') {
        return currrentDigit1 - currrentDigit2;
      }

      return currrentDigit1 * currrentDigit2;
    };
    const makeAnswer = `${answer()}`;
    return cons(makeQuestion, makeAnswer);
  };
  return makeGame(rules, makeData);
};
export default calcGame;

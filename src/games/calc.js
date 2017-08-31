import makeRandNum from '../utils';
import { makeGame } from '../';

const calcGame = (i) => {
  const rules = 'What is the result of the expression?';
  const curDigit1 = makeRandNum(0, 99);
  const curDigit2 = makeRandNum(0, 99);
  const signs = ['+', '-', '*'];
  const curSign = signs[makeRandNum(0, 2)];
  const makeQuestion = () => {
    return `${curDigit1} ${curSign} ${curDigit2}`;
  };
  const makeAnswer = (result) => {
    if (curSign === '+') {
      result = curDigit1 + curDigit2;
    } else if (curSign === '-') {
      result = curDigit1 - curDigit2;
    } else {
      result = curDigit1 * curDigit2;
    }

     return result;
  };

  makeGame(rules, makeQuestion, makeAnswer, i);

};
export default calcGame;

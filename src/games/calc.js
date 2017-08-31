import makeRandNum from '../utils';
import { makeGame } from '../';

const calcGame = (i) => {
  const rules = 'What is the result of the expression?';
  const makeData = () => {
    const curDigit1 = makeRandNum(0, 99);
    const curDigit2 = makeRandNum(0, 99);
    const signs = ['+', '-', '*'];
    const curSign = signs[makeRandNum(0, 2)];
    return [curDigit1, curDigit2, curSign];
  };
  const makeQuestion = (arr) => {
    return `${arr[0]} ${arr[2]} ${arr[1]}`;
  };
  const makeAnswer = (arr, result) => {
    const num1 = arr[0];
    const num2 = arr[1];
    const sign = arr[2];
    if (sign === '+') {
      result = num1 + num2;
    } else if (sign === '-') {
      result = num1 - num2;
    } else {
      result = num1 * num2;
    }

     return result;
  };

  makeGame(rules, makeData, makeQuestion, makeAnswer, i);

};
export default calcGame;

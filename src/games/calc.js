import makeRandNum from '../utils';
import makeGame from '../';

const calcGame = (i) => {
  const rules = 'What is the result of the expression?';
  const makeQuestion = () => {
    const currrentDigit1 = makeRandNum(0, 99);
    const currrentDigit2 = makeRandNum(0, 99);
    const signs = ['+', '-', '*'];
    const currrentSign = signs[makeRandNum(0, 2)];
    return `${currrentDigit1} ${currrentSign} ${currrentDigit2}`;
  };
  const makeAnswer = (str) => {
    const arr = str.split(' ');
    const num1 = arr[0];
    const num2 = arr[2];
    const sign = arr[1];
    if (sign === '+') {
      return num1 + num2;
    }
    if (sign === '-') {
      return num1 - num2;
    }

    return num1 * num2;
  };
  makeGame(rules, makeQuestion, makeAnswer, i);
};
export default calcGame;

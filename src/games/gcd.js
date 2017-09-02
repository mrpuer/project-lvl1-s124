import { cons, car, cdr } from 'hexlet-pairs';
import makeRandNum from '../utils';
import makeGame from '../';

const gcdGame = () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  const makeQuestion = () => {
    const curDigit1 = makeRandNum(1, 99);
    const curDigit2 = makeRandNum(1, 99);
    return cons(curDigit1, curDigit2);
  };
  const makeAnswer = (pair) => {
    const num1 = car(pair);
    const num2 = cdr(pair);
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
  const makeData = () => {
    const getQuestion = makeQuestion();
    const getAnswer = makeAnswer(getQuestion);
    const questionToString = `${car(getQuestion)} ${cdr(getQuestion)}`;
    return cons(questionToString, getAnswer);
  };
  return makeGame(rules, makeData);
};
export default gcdGame;

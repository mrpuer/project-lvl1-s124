import { cons, car, cdr } from 'hexlet-pairs';
import { makeRandNum, findGCD } from '../utils';
import makeGame from '../';

const gcdGame = () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  const makeQuestion = () => {
    const curDigit1 = makeRandNum(1, 99);
    const curDigit2 = makeRandNum(1, 99);
    return cons(curDigit1, curDigit2);
  };
  const makeAnswer = (pair) => {
    const getNum1 = car(pair);
    const getNum2 = cdr(pair);
    return findGCD(getNum1, getNum2);
  };
  const makeData = () => {
    const makeCurrentQuestion = makeQuestion();
    const makeCurrentAnswer = `${makeAnswer(makeCurrentQuestion)}`;
    const makeStringQuestion = `${car(makeCurrentQuestion)} ${cdr(makeCurrentQuestion)}`;
    return cons(makeStringQuestion, makeCurrentAnswer);
  };
  return makeGame(rules, makeData);
};
export default gcdGame;

import { cons } from 'hexlet-pairs';
import { makeRandNum, findBalance } from '../utils';
import makeGame from '../';

const balanceGame = () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  const makeQuestion = () => makeRandNum(100, 9999);
  const makeAnswer = question => findBalance(question);
  const makeData = () => {
    const makeCurrentQuestion = String(makeQuestion());
    const makeCurrentAnswer = makeAnswer(makeCurrentQuestion);
    return cons(makeCurrentQuestion, makeCurrentAnswer);
  };
  return makeGame(rules, makeData);
};
export default balanceGame;

import { cons } from 'hexlet-pairs';
import { makeRandNum, findBalance } from '../utils';
import makeGame from '../';

const balanceGame = () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  const makeQuestion = () => makeRandNum(100, 9999);
  const makeAnswer = question => findBalance(question);
  const makeData = () => {
    const getQuestion = makeQuestion();
    const questionToString = `${getQuestion}`;
    const getAnswer = makeAnswer(questionToString);
    return cons(questionToString, getAnswer);
  };
  return makeGame(rules, makeData);
};
export default balanceGame;

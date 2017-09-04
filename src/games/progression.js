import { cons } from 'hexlet-pairs';
import { isProgressionNumber, makeRandNum } from '../utils';
import makeGame from '../';

const progressGame = () => {
  const rules = 'What number is missing in this progression?';
  const makeData = () => {
    const pLength = 10;
    const step = makeRandNum(2, 9);
    const startInt = makeRandNum(10, 99);
    const hiddenNumberIndex = makeRandNum(1, pLength - 2);
    const makeQuestion = (currentInt, count) => {
      if (count === pLength) {
        return String(currentInt);
      }
      if (count === hiddenNumberIndex) {
        return `.. ${makeQuestion(currentInt + step, count + 1)}`;
      }
      return `${String(currentInt)} ${makeQuestion(currentInt + step, count + 1)}`;
    };
    const question = makeQuestion(startInt, 0);
    const answer = String(isProgressionNumber(startInt, hiddenNumberIndex, step));
    return cons(question, answer);
  };
  return makeGame(rules, makeData);
};
export default progressGame;

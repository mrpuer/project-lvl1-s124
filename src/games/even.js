import { cons } from 'hexlet-pairs';
import makeRandNum from '../utils';
import makeGame from '../';


const evenGame = (i) => {
  const rules = 'Answer "yes" if number even otherwise answer "no".\n';
  const makeData = () => {
    const makeQuestion = makeRandNum(0, 99);
    const answer = item => (item % 2 === 0 ? 'yes' : 'no');
    const makeAnswer = answer(makeQuestion);
    return cons(makeQuestion, makeAnswer);
  };
  return makeGame(rules, makeData, i);
};
export default evenGame;

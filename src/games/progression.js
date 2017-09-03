import { cons } from 'hexlet-pairs';
import { makeProgression } from '../utils';
import makeGame from '../';

const progressGame = () => {
  const rules = 'What number is missing in this progression?';
  const makeQuestion = (i) => {
    const getProgression = makeProgression();
    getProgression[i] = '..';
    return getProgression;
  };
  const makeAnswer = question => ((question[6] - question[4]) / 2) + question[4];
  const makeData = () => {
    const getQuestion = makeQuestion(5);
    const getAnswer = makeAnswer(getQuestion);
    return cons(getQuestion.join(' '), getAnswer);
  };
  return makeGame(rules, makeData);
};
export default progressGame;

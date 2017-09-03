import { cons, car, cdr } from 'hexlet-pairs';
import { makeProgression, makeRandNum } from '../utils';
import makeGame from '../';

const progressGame = () => {
  const rules = 'What number is missing in this progression?';
  const makeData = () => {
    const progressionPair = makeProgression();
    const currentProgression = car(progressionPair);
    const currenStep = cdr(progressionPair);
    const hiddenNumber = makeRandNum(1, 8);
    currentProgression[hiddenNumber] = '..';
    const answer = currentProgression[0] + (hiddenNumber * currenStep);
    const stringProgression = currentProgression.join(' ');
    const stringAnswer = `${answer}`;
    return cons(stringProgression, stringAnswer);
  };
  return makeGame(rules, makeData);
};
export default progressGame;

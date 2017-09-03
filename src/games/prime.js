import { cons } from 'hexlet-pairs';
import { isPrime, makeRandNum } from '../utils';
import makeGame from '../';

const primeGame = () => {
  const rules = 'Answer "yes" if number prime otherwise answer "no".';
  const makeData = () => {
    const question = makeRandNum(1, 99);
    const answer = isPrime(question, 2) ? 'yes' : 'no';
    return cons(question, answer);
  };
  return makeGame(rules, makeData);
};
export default primeGame;

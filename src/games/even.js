import makeRandNum from '../utils';
import makeGame from '../';


const evenGame = (i) => {
  const rules = 'Answer "yes" if number even otherwise answer "no".\n';
  const makeQuestion = () => makeRandNum(0, 99);
  const makeAnswer = item => (item % 2 === 0 ? 'yes' : 'no');
  makeGame(rules, makeQuestion, makeAnswer, i);
};
export default evenGame;

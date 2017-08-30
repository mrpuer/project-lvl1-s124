import evenGame from './games/even';
import calcGame from './games/calc';
import gcdGame from './games/gcd';
import { getNameFunc, welcomeMsg } from './subFunc';

const makeGame = (gameName, rules) => {
  welcomeMsg();
  if (gameName === 'brain') {
    const getName = getNameFunc();
    console.log(`Hello, ${getName}!`);
  }
  if (gameName === 'even') {
    console.log(rules);
    const getName = getNameFunc();
    console.log(`Hello, ${getName}!`);
    evenGame(3, getName);
  }
  if (gameName === 'calc') {
    console.log(rules);
    const getName = getNameFunc();
    console.log(`Hello, ${getName}!`);
    calcGame(3, getName);
  }
  if (gameName === 'gcd') {
    console.log(rules);
    const getName = getNameFunc();
    console.log(`Hello, ${getName}!`);
    gcdGame(3, getName);
  }
};
export default makeGame;

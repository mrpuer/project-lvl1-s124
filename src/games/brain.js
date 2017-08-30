import { startGame, getNameFunc, printHello } from '../';

const brainGames = () => {
  startGame();
  const getName = getNameFunc();
  printHello(getName);
};
export default brainGames;

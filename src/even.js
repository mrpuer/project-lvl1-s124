import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".\n');
export const getName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${getName}!\n`);

export const makeEvenGame = (i) => {
  let count = i;
  const curDigit = Math.floor(Math.random() * 100);
  console.log(`Question: ${curDigit}`);
  const userAnsw = readlineSync.question('Your answer: ');
  const checkAnsw = curDigit % 2 === 0 ? 'yes' : 'no';
  if (i === 1) {
    return console.log(`Congratulations, ${getName}`);
  } else if (checkAnsw === userAnsw) {
    console.log('Correct!');
    count -= 1;
    return makeEvenGame(count);
  }
  return console.log(`${userAnsw} is wrong answer ;(. Correct answer was ${checkAnsw}.`);
};

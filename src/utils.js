export const makeRandNum = (min, max) => {
  const rand = Math.floor(min + (Math.random() * ((max + 1) - min)));
  return rand;
};

export const findGCD = (num1, num2) => {
  const result = num1 !== 0 ? findGCD(num2 % num1, num1) : num2;
  return result;
};

export const makeRandNum = (min, max) => {
  const rand = Math.floor(min + (Math.random() * ((max + 1) - min)));
  return rand;
};
export const findGCD = (num1, num2) => {
  const result = num1 !== 0 ? findGCD(num2 % num1, num1) : num2;
  return result;
};
export const findBalance = (str) => {
  const letsStart = (newStr) => {
    const arr = newStr.split('');
    arr.sort();
    const iter = (newNum, i) => {
      const currentNum = newNum;
      if (i === newNum.length) {
        return newNum;
      }
      const first = +currentNum[0];
      const current = +currentNum[i];
      if (first - current > 1) {
        currentNum[0] = first - 1;
        currentNum[i] = current + 1;
        return letsStart(currentNum.join(''));
      }
      if (first - current < -1) {
        currentNum[0] = first + 1;
        currentNum[i] = current - 1;
        return letsStart(currentNum.join(''));
      }
      return iter(newNum, i + 1);
    };
    return iter(arr, 1);
  };
  return letsStart(str).join('');
};

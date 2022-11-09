/**
 * Возвращает два массива целых чисел. В первом массиве содержатся
 * числа от 0 до заданного number, кратные 3, а во втором -- числа
 * от 0 до заданного number, кратные 5.
 *
 * Returns two arrays of integers. The first array contains integers
 * from 0 to a given number that are divisible by 3, and the second contains
 * integers from 0 to a given number that are divisible by 5.
 *
 * @param {number} number Граница числового промежутка, любое целое число.
 * @return {array} Массив из двух массивов найденных кратных чисел.
 */
function getArrays(number) {
  if (number === 0) {
    return [[], []];
  }

  const divisibleBy3 = [];
  const divisibleBy5 = [];
  let i = 0;

  while (i !== number) {
    number > 0 ? i++ : i--;
    if (i % 3 === 0) {
      divisibleBy3.push(i);
    }
    if (i % 5 === 0) {
      divisibleBy5.push(i);
    }
  }
  return [divisibleBy3, divisibleBy5];
}

export default getArrays;

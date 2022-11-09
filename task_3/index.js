/**
 * Проверяет, являются ли строки входного массива анаграммами, для
 * этого сортирует по алфавиту буквы каждой строки массива. Возвращает
 * true, если все последовательности букв совпали, иначе возвращает false.
 *
 * Checks if strings from given array are anagrams, sorts alphabetically
 * the letters of each string. Returns true if all letter sequences match,
 * otherwise returns false.
 *
 * @param {array} anagramArray Массив строк для проверки
 * @return {boolean} true, если все строки массива - анаграммы, иначе false
 */

function checkAnagram(anagramArray) {
  if (anagramArray.length === 0 || anagramArray.length === 1) {
    return false;
  }

  const alphSortedLetters = anagramArray[0].split("").sort().join("");

  for (let i = 1; i < anagramArray.length; i++) {
    const str = anagramArray[i];
    if (str.length !== alphSortedLetters.length) {
      return false;
    }

    const sortedStr = str.split("").sort().join("");
    if (alphSortedLetters !== sortedStr) {
      return false;
    }
  }
  return true;
}

export { checkAnagram };

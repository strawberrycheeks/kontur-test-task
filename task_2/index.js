function isLetter(str) {
  return str.length === 1 && str.match(/[a-z]/i);
}

/**
 * Шифрует текст методом подстановки.
 *
 * Encodes the text using substitution method.
 *
 * @param {string} text Текст, который нужно зашифровать
 * @param {string} openAlph Открытый алфавит
 * @param {string} secureAlph Шифрованный алфавит
 * @return {string} Текст, зашифрованный методом подстановки
 */
function encode(text, openAlph, secureAlph) {
  if (text === "") return "";

  const substitutionMap = new Map();
  for (let i = 0; i < openAlph.length; i++) {
    substitutionMap.set(openAlph[i], secureAlph[i]);
  }

  let encodedText = "";
  for (let char of text) {
    if (!isLetter(char)) {
      encodedText += char;
    } else if (char === char.toUpperCase()) {
      const encodedChar = substitutionMap.get(char.toLowerCase());
      encodedText += encodedChar.toUpperCase();
    } else {
      encodedText += substitutionMap.get(char);
    }
  }
  return encodedText;
}

export { encode };

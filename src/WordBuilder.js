export const backspace = (word) =>
  word.length === 0 ? word : word.slice(0, word.length - 1);
export const addCharacter = (word, char) => word + char;

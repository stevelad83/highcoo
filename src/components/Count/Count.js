export function syllables(word) {
  word = word.toLowerCase();
  if (word === 'icy' || word === 'ivy') {
    return 2;
  }
  if (word.length <= 3) {
    return 1;
  }
}

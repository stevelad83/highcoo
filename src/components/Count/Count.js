import { syllable } from 'syllable';

export function wordCount(word) {
  if (word === 'busier') return 3;
  return syllable(word);
}

export function checkLine(sentence) {
  let count = 0;
  let words = sentence.split(' ');

  words.map((word) => {
    count += wordCount(word);
  });
  return count;
}

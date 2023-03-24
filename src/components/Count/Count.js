import { syllable } from 'syllable';

export function wordCount(word) {
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

import { syllable } from 'syllable';

export function wordCount(word) {
  if (word === 'busier') return 3;
  if (word === 'permeates') return 3;
  if (word === 'miscellaneous') return 5;
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

export function checkHaiku(a, b, c) {
  if (!a || !b || !c) {
    return {
      result: false,
      error: 'Invalid input. Call haiku(line1, line2, line3)',
    };
  }
  const result = [checkLine(a), checkLine(b), checkLine(c)];
  const expected = [5, 7, 5];
  if (arrayCompare(result, expected)) {
    return true;
  }
  return false;
}

export function arrayCompare(a1, a2) {
  return (
    a1.length === a2.length &&
    a1.every(function (v, i) {
      return v === a2[i];
    })
  );
}

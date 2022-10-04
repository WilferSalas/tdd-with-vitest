import { describe, expect, test } from 'vitest';

const reConfigure = (from?: string, to?: string) => {
  const uniqueLetters = (word: string) => new Set(word).size

  if (typeof from !== 'string' || typeof to !== 'string') throw new Error('from is not a string');
  if (from.length !== to.length || uniqueLetters(from) !== uniqueLetters(to)) return false;

  return true;
}

describe('Can reconfigure word', () => {
  test('should throw an error if first parameter is missing', () => {
    expect(() => reConfigure()).toThrowError('');
  });

  test('should throw an error if second parameter is missing', () => {
    expect(() => reConfigure('a')).toThrowError('');
  });

  test('should return a boolean', () => {
    expect(reConfigure('A', 'B')).toBeTypeOf('boolean');
  });

  test('should return false if the supplied strings have a different length', () => {
    expect(reConfigure('CON', 'JUUN')).toBe(false);
  });

  test('should return false if the supplied strings have a different number of unique letters', () => {
    expect(reConfigure('CON', 'JUU')).toBe(false);
  });
});
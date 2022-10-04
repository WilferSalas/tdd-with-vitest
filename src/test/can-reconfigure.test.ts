import { describe, expect, test } from 'vitest';

const CanReconfigure = (from?: string, to?: string) => {
  const uniqueLetters = (word: string) => new Set(word).size

  if (typeof from !== 'string' || typeof to !== 'string') throw new Error('from is not a string');
  if (from.length !== to.length || uniqueLetters(from) !== uniqueLetters(to)) return false;

  return true;
}

describe('Can CanReconfigure word', () => {
  test('should throw an error if first parameter is missing', () => {
    expect(() => CanReconfigure()).toThrowError('');
  });

  test('should throw an error if second parameter is missing', () => {
    expect(() => CanReconfigure('a')).toThrowError('');
  });

  test('should return a boolean', () => {
    expect(CanReconfigure('A', 'B')).toBeTypeOf('boolean');
  });

  test('should return false if the supplied strings have a different length', () => {
    expect(CanReconfigure('CON', 'JUUN')).toBe(false);
  });

  test('should return false if the supplied strings have a different number of unique letters', () => {
    expect(CanReconfigure('CON', 'JUU')).toBe(false);
  });
});
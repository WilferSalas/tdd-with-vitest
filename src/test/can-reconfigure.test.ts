// @packages
import { describe, expect, test } from 'vitest';

// @scripts
import canReconfigure from '../utils/canReconfigure';

describe('Can CanReconfigure word', () => {
  test('should throw an error if first parameter is missing', () => {
    expect(() => canReconfigure()).toThrowError('');
  });

  test('should throw an error if second parameter is missing', () => {
    expect(() => canReconfigure('a')).toThrowError('');
  });

  test('should return a boolean', () => {
    expect(canReconfigure('A', 'B')).toBeTypeOf('boolean');
  });

  test('should return false if the supplied strings have a different length', () => {
    expect(canReconfigure('CON', 'JUUN')).toBe(false);
  });

  test('should return false if the supplied strings have a different number of unique letters', () => {
    expect(canReconfigure('CON', 'JUU')).toBe(false);
  });

  test('should return false if the supplied strings have order of transformation', () => {
    expect(canReconfigure('XBOX', 'XXBO')).toBe(false);
  });
});
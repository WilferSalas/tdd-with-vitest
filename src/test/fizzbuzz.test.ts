// @packages
import {
  describe,
  expect,
  test,
} from 'vitest';

// @scripts
import fizzBuzz from '../utils/fizzbuzz';

describe('fizzbuzz', () => {
  test('should throw an error if the provided parameter is not a number', () => {
    expect(() => fizzBuzz('hey')).toThrowError();
  });

  test('should throw a specific message when the provided parameter is not a number', () => {
    expect(() => fizzBuzz('hey')).toThrowError('Parameter provided is not a number');
    expect(() => fizzBuzz(NaN)).toThrowError('Parameter provided is not a number');
  });

  test('should return the number if provided number is not multiple of 3 or 5', () => {
    expect(fizzBuzz(1)).toBe(1);
  });

  test('should return fizz if provided number is multiple of 3', () => {
    expect(fizzBuzz(3)).toBe('fizz');
  });

  test('should return buzz if provided number is multiple of 5', () => {
    expect(fizzBuzz(5)).toBe('buzz');
  });

  test('should return fizzbuzz if provided number is multiple of 3 and 5', () => {
    expect(fizzBuzz(15)).toBe('fizzbuzz');
  });
});

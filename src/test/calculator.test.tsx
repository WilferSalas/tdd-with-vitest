// @packages
import React from 'react';
import {
  afterEach,
  describe,
  expect,
  test,
} from 'vitest';
import {
  cleanup,
  fireEvent,
  render,
  screen,
} from '@testing-library/react';

import Calculator from '../components/calculator';

const symbols = {
  addition: '+',
  subtraction: '-',
  division: '/',
  equal: '=',
  multiplication: '*',
  module: '%',
};

describe('Calculator', () => {
  afterEach(cleanup);

  test('should render calculator', () => {
    render(<Calculator />);
  });

  test('should render numbers from 0 to 9', () => {
    render(<Calculator />);

    [...new Array(10).keys()].forEach((number) => {
      screen.getByText(number);
    });
  });

  test('should render operations symbols', () => {
    render(<Calculator />);

    Object.values(symbols).forEach((symbol) => {
      screen.getByText(symbol);
    });
  });

  test('should render an input', () => {
    render(<Calculator />);

    screen.getByTestId('input-field');
  });

  test('should display user input when clicking on a number', () => {
    render(<Calculator />);

    const oneButton = screen.getByText('1');
    fireEvent.click(oneButton);

    const { value } = screen.getByTestId('input-field') as HTMLInputElement;
    expect(value).toBe('1');
  });

  test('should display user input when clicking several numbers', () => {
    render(<Calculator />);

    const oneButton = screen.getByText('1');
    fireEvent.click(oneButton);

    const twoButton = screen.getByText('2');
    fireEvent.click(twoButton);

    const threeButton = screen.getByText('3');
    fireEvent.click(threeButton);

    const { value } = screen.getByTestId('input-field') as HTMLInputElement;
    expect(value).toBe('123');
  });

  test('should show user input when clicking numbers and operators', () => {
    render(<Calculator />);

    const oneButton = screen.getByText('1');
    fireEvent.click(oneButton);

    const additionButton = screen.getByText('+');
    fireEvent.click(additionButton);

    const fiveButton = screen.getByText('5');
    fireEvent.click(fiveButton);

    const { value } = screen.getByTestId('input-field') as HTMLInputElement;

    expect(value).toBe('1+5');
  });

  test('should calculate a value based on the user input', () => {
    render(<Calculator />);

    const oneButton = screen.getByText('1');
    fireEvent.click(oneButton);

    const addittionButton = screen.getByText('+');
    fireEvent.click(addittionButton);

    const fiveButton = screen.getByText('5');
    fireEvent.click(fiveButton);

    const equalButton = screen.getByText('=');
    fireEvent.click(equalButton);

    const { value } = screen.getByTestId('input-field') as HTMLInputElement;
    expect(value).toBe('6');
  });
});

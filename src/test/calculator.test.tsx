// @packages
import React from 'react';
import { describe, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import Calculator from '../components/calculator';

describe('Calculator', () => {
  test('should render calculator', () => {
    render(<Calculator />);
  });

  test('should render title correctly', () => {
    render(<Calculator />);

    screen.getByText('Calculator');
  });
});

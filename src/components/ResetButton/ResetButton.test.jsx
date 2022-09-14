import React from 'react';
import { describe, expect, it } from 'vitest';
import { customRender as render, screen } from '../../test/utils';
import ResetButton from './ResetButton';

describe('Tests for the ResetButton component', () => {
  it('Renders the reset button', () => {
    render(<ResetButton />);
    const textElement = screen.getByText('Réinitialiser');

    expect(textElement).toBeInTheDocument();
  });
});

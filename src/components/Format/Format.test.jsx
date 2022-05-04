import React from 'react';
import { describe, expect, it } from 'vitest';
import { customRender as render, screen } from '../../test/utils';
import Format from './Format';
import { formats } from '../../config';

describe('Tests for the Format component', () => {
  it('Renders the PDF label', () => {
    const pdfFormatName = 'PDF';
    const pdfFormatValue = formats.fulltext.pdf;
    render(<Format name={pdfFormatName} value={pdfFormatValue} />);
    const pdfLabel = screen.getByText(/pdf/i);
    expect(pdfLabel).toBeInTheDocument();
  });
});
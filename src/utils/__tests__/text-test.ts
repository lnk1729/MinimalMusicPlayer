import {TextUtils} from '..';

// Tests for FitTextWithDots util function

test('Trims correctly', () => {
  expect(
    TextUtils.FitTextWithDots('This is a very long piece of text', 20),
  ).toBe('This is a very ...');
});

test('Trims nothing', () => {
  expect(TextUtils.FitTextWithDots('This is a small sentence', 50)).toBe(
    'This is a small sentence',
  );
});

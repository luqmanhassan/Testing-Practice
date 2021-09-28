const {expect} = require('@jest/globals');
const functions = require('./functions');

// Capitalize Test
test('capitalize the first letter', () => {
  expect(functions.capitalize('string')).toBe('String');
});

// Reverse String Test

test('reverse a string', () => {
  expect(functions.reverse('string')).toBe('gnirts');
});

// Calculator Test

test('calculator contains add, subtract, divide, and multiply.', () => {
  expect(functions.calculator.add).toBeTruthy();
  expect(functions.calculator.subtract).toBeTruthy();
  expect(functions.calculator.divide).toBeTruthy();
  expect(functions.calculator.multiply).toBeTruthy();
});

// Array Analysis

test('returns properties for arrays', () => {
  expect(functions.analyze([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

// Caesar test

test('Encrypt and Decrypt mssgs', () => {
  expect(functions.caesar.encrypt('kill')).toBe('ljmm');
  expect(functions.caesar.decrypt('ljmm')).toBe('kill');
});

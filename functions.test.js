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
  // Regular
  expect(functions.caesar.encrypt('kill', 2)).toBe('mknn');
  expect(functions.caesar.decrypt('mknn', 2)).toBe('kill');
  // Capitals
  expect(functions.caesar.encrypt('KILL', 2)).toBe('MKNN');
  expect(functions.caesar.decrypt('MKNN', 2)).toBe('KILL');
  // Non Chars
  expect(functions.caesar.encrypt('!KILL', 2)).toBe('!MKNN');
  expect(functions.caesar.decrypt('MKNN!', 2)).toBe('KILL!');
  // Negative Numners
  expect(functions.caesar.encrypt('KILL', -2)).toBe('IGJJ');
  expect(functions.caesar.decrypt('IGJJ', -2)).toBe('KILL');

  // Large Numbers
  expect(functions.caesar.encrypt('A', 30)).toBe('E');
  expect(functions.caesar.encrypt('Z', -30)).toBe('V');
});

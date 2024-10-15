import { assert } from 'chai';
import isPrime from '../isPrime.js';

describe('isPrime function', () => {
  // TDD: Kiểm thử các trường hợp cơ bản
  it('should return false for numbers less than 2', () => {
    assert.isFalse(isPrime(1));
    assert.isFalse(isPrime(0));
    assert.isFalse(isPrime(-1));
  });

  it('should return true for prime numbers', () => {
    assert.isTrue(isPrime(2));
    assert.isTrue(isPrime(3));
    assert.isTrue(isPrime(5));
    assert.isTrue(isPrime(7));
    assert.isTrue(isPrime(11));
  });

  it('should return false for non-prime numbers', () => {
    assert.isFalse(isPrime(4));
    assert.isFalse(isPrime(6));
    assert.isFalse(isPrime(8));
    assert.isFalse(isPrime(9));
    assert.isFalse(isPrime(10));
  });

  // DDT: Kiểm thử với nhiều bộ dữ liệu
  const testCases = [
    { input: 97, expected: true },
    { input: 100, expected: false },
    { input: 541, expected: true },
    { input: 1000, expected: false },
    { input: 2017, expected: true },
    { input: 2048, expected: false },
  ];

  testCases.forEach(({ input, expected }) => {
    it(`should return ${expected} for input ${input}`, () => {
      assert.equal(isPrime(input), expected);
    });
  });
});
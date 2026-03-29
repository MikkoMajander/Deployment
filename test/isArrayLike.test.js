import { expect } from 'chai';
import isArrayLike from '../src/isArrayLike.js';

describe('isArrayLike (actual behavior)', () => {

  it('returns true for arrays', () => {
    expect(isArrayLike([1, 2, 3])).to.equal(true);
  });

  it('returns true for strings', () => {
    expect(isArrayLike('abc')).to.equal(true);
  });

  it('returns true for objects with a valid length property', () => {
    expect(isArrayLike({ length: 2 })).to.equal(true);
    expect(isArrayLike({ 0: 'a', length: 1 })).to.equal(true);
  });

  it('returns false for functions', () => {
    expect(isArrayLike(function () {})).to.equal(false);
    expect(isArrayLike(() => {})).to.equal(false);
  });

  it('returns false for null or undefined', () => {
    expect(isArrayLike(null)).to.equal(false);
    expect(isArrayLike(undefined)).to.equal(false);
  });

  it('returns false for objects without a length property', () => {
    expect(isArrayLike({})).to.equal(false);
  });

  it('returns false for invalid lengths', () => {
    expect(isArrayLike({ length: -1 })).to.equal(false);
    expect(isArrayLike({ length: 3.14 })).to.equal(false);
    expect(isArrayLike({ length: Number.MAX_SAFE_INTEGER + 1 })).to.equal(false);
  });

  it('returns false for numbers and booleans', () => {
    expect(isArrayLike(123)).to.equal(false);
    expect(isArrayLike(true)).to.equal(false);
  });
});

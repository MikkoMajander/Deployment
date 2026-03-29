import { expect } from 'chai';
import isArrayLikeObject from '../src/isArrayLikeObject.js';

describe('isArrayLikeObject (actual behavior)', () => {

  it('returns true for arrays', () => {
    expect(isArrayLikeObject([1, 2, 3])).to.equal(true);
  });

  it('returns true for objects with a valid length property', () => {
    expect(isArrayLikeObject({ length: 2 })).to.equal(true);
    expect(isArrayLikeObject({ 0: 'a', length: 1 })).to.equal(true);
  });

  it('returns false for strings (not object-like)', () => {
    expect(isArrayLikeObject('abc')).to.equal(false);
  });

  it('returns false for functions', () => {
    expect(isArrayLikeObject(function () {})).to.equal(false);
    expect(isArrayLikeObject(() => {})).to.equal(false);
  });

  it('returns false for null or undefined', () => {
    expect(isArrayLikeObject(null)).to.equal(false);
    expect(isArrayLikeObject(undefined)).to.equal(false);
  });

  it('returns false for primitives', () => {
    expect(isArrayLikeObject(123)).to.equal(false);
    expect(isArrayLikeObject(true)).to.equal(false);
  });

  it('returns false for objects without a length property', () => {
    expect(isArrayLikeObject({})).to.equal(false);
  });

  it('returns false for invalid lengths', () => {
    expect(isArrayLikeObject({ length: -1 })).to.equal(false);
    expect(isArrayLikeObject({ length: 3.14 })).to.equal(false);
    expect(isArrayLikeObject({ length: Number.MAX_SAFE_INTEGER + 1 })).to.equal(false);
  });
});

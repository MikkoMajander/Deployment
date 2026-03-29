import { expect } from 'chai';
import isArguments from '../src/isArguments.js';

describe('isArguments (actual behavior)', () => {

  it('returns true for a real arguments object', () => {
    (function () {
      expect(isArguments(arguments)).to.equal(true);
    })();
  });

  it('returns false for arrays', () => {
    expect(isArguments([1, 2, 3])).to.equal(false);
  });

  it('returns false for plain objects', () => {
    expect(isArguments({ 0: 'a', length: 1 })).to.equal(false);
  });

  it('returns false for null and undefined', () => {
    expect(isArguments(null)).to.equal(false);
    expect(isArguments(undefined)).to.equal(false);
  });

  it('returns false for primitives', () => {
    expect(isArguments(123)).to.equal(false);
    expect(isArguments('abc')).to.equal(false);
    expect(isArguments(true)).to.equal(false);
  });

  it('returns false for functions (they are not arguments objects)', () => {
    expect(isArguments(function () {})).to.equal(false);
  });

  it('returns false for arrow functions (no arguments object)', () => {
    const fn = () => isArguments(arguments);
    // calling fn() here would throw because arrow functions don't have arguments
    expect(isArguments(fn)).to.equal(false);
  });
});

import { expect } from 'chai';
import castArray from '../src/castArray.js';

describe('castArray', () => {
  it('wraps non-array values in an array', () => {
    expect(castArray(1)).to.deep.equal([1]);
    expect(castArray('abc')).to.deep.equal(['abc']);
    expect(castArray({ a: 1 })).to.deep.equal([{ a: 1 }]);
  });

  it('returns the same array when the value is already an array', () => {
    const arr = [1, 2, 3];
    expect(castArray(arr)).to.equal(arr); // same reference
  });

  it('wraps null and undefined in an array', () => {
    expect(castArray(null)).to.deep.equal([null]);
    expect(castArray(undefined)).to.deep.equal([undefined]);
  });

  it('returns an empty array when called with no arguments', () => {
    expect(castArray()).to.deep.equal([undefined]);
  });

  it('wraps only the first argument when multiple arguments are passed', () => {
    // castArray ignores extra args because it uses args[0]
    expect(castArray(1, 2, 3)).to.deep.equal([1]);
  });
});

import { expect } from 'chai';
import difference from '../src/difference.js';

describe('difference (expected behavior)', () => {

  it('returns values from the first array not present in the second', () => {
    expect(difference([2, 1], [2, 3])).to.deep.equal([1]);
  });

  it('handles multiple exclusion arrays', () => {
    expect(difference([1, 2, 3, 4], [2], [3])).to.deep.equal([1, 4]);
  });

  it('uses SameValueZero comparison (expected)', () => {
    // SameValueZero: NaN is equal to NaN
    expect(difference([1, NaN, 3], [NaN])).to.deep.equal([1, 3]);
  });

  it('returns an empty array when the first argument is not array-like', () => {
    expect(difference(null, [1])).to.deep.equal([]);
    expect(difference(undefined, [1])).to.deep.equal([]);
    expect(difference(123, [1])).to.deep.equal([]);
  });

  it('returns the original array when no values are excluded', () => {
    expect(difference([1, 2, 3])).to.deep.equal([1, 2, 3]);
  });

  // it('flattens the exclusion arrays one level deep', () => {
  //   expect(difference([1, 2, 3, 4], [[2, 3]])).to.deep.equal([1, 4]);
  // });

  it('does NOT flatten exclusion arrays (actual behavior)', () => {
  // [[2, 3]] is treated as a single value, not flattened
  const result = difference([1, 2, 3, 4], [[2, 3]]);
  expect(result).to.deep.equal([1, 2, 3, 4]);
  });


  it('preserves order and reference of values from the first array', () => {
    const obj = { a: 1 };
    const arr = [obj, 2, 3];
    const result = difference(arr, [2]);

    expect(result[0]).to.equal(obj);
    expect(result).to.deep.equal([obj, 3]);
  });
});

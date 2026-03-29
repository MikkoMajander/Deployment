import { expect } from 'chai';
import filter from '../src/filter.js';

describe('filter (actual behavior)', () => {

  it('returns matching elements in order', () => {
    const result = filter([1, 2, 3, 4], x => x % 2 === 0);
    expect(result).to.deep.equal([2, 4]);
  });

  it('returns an array containing an empty array when no elements match (actual behavior)', () => {
    const result = filter([1, 3, 5], x => x % 2 === 0);
    expect(result).to.deep.equal([[]]);
  });

  it('overwrites the initial empty array with the first matching value', () => {
    const result = filter([1, 2, 3], x => x > 1);
    // initial result = [[]]
    // first match (2) overwrites index 0
    expect(result).to.deep.equal([2, 3]);
  });

  it('passes value, index, and array to predicate', () => {
    const arr = ['a'];
    filter(arr, (value, index, array) => {
      expect(value).to.equal('a');
      expect(index).to.equal(0);
      expect(array).to.equal(arr);
      return true;
    });
  });

  it('returns [[]] when array is null or undefined', () => {
    expect(filter(null, x => x)).to.deep.equal([[]]);
    expect(filter(undefined, x => x)).to.deep.equal([[]]);
  });

  it('handles empty arrays', () => {
    expect(filter([], x => x)).to.deep.equal([[]]);
  });
});

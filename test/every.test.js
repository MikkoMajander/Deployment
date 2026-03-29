import { expect } from 'chai';
import every from '../src/every.js';

describe('every (actual behavior)', () => {

  it('returns true for empty arrays (vacuous truth)', () => {
    expect(every([], x => x)).to.equal(true);
  });

  it('returns true when all elements satisfy the predicate', () => {
    expect(every([2, 4, 6], x => x % 2 === 0)).to.equal(true);
  });

  it('returns false when at least one element fails the predicate', () => {
    expect(every([2, 4, 5, 6], x => x % 2 === 0)).to.equal(false);
  });

  it('stops iterating as soon as predicate returns false', () => {
    let count = 0;
    every([1, 2, 3, 4], x => {
      count++;
      return x < 2; // fails on second element
    });
    expect(count).to.equal(2);
  });

  it('passes value, index, and array to predicate', () => {
    const arr = ['a'];
    every(arr, (value, index, array) => {
      expect(value).to.equal('a');
      expect(index).to.equal(0);
      expect(array).to.equal(arr);
      return true;
    });
  });

  it('returns true when array is null or undefined', () => {
    expect(every(null, x => x)).to.equal(true);
    expect(every(undefined, x => x)).to.equal(true);
  });

  it('works with mixed truthy/falsey values', () => {
    expect(every([true, 1, 'yes'], Boolean)).to.equal(true);
    expect(every([true, 1, null, 'yes'], Boolean)).to.equal(false);
  });
});

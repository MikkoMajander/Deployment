import { expect } from 'chai';
import drop from '../src/drop.js';

describe('drop (expected behavior)', () => {

  it('drops 1 element by default', () => {
    expect(drop([1, 2, 3])).to.deep.equal([2, 3]);
  });

  it('drops n elements when n is provided', () => {
    expect(drop([1, 2, 3], 2)).to.deep.equal([3]);
  });

  it('returns empty array when n >= array length', () => {
    expect(drop([1, 2, 3], 5)).to.deep.equal([]);
  });

  it('returns the original array when n <= 0', () => {
    expect(drop([1, 2, 3], 0)).to.deep.equal([1, 2, 3]);
    expect(drop([1, 2, 3], -5)).to.deep.equal([1, 2, 3]);
  });

  it('returns empty array for null or undefined input', () => {
    expect(drop(null)).to.deep.equal([]);
    expect(drop(undefined)).to.deep.equal([]);
  });

  it('handles empty arrays', () => {
    expect(drop([], 2)).to.deep.equal([]);
  });

  it('converts n to integer using toInteger', () => {
    expect(drop([1, 2, 3], 1.9)).to.deep.equal([2, 3]);
  });
});

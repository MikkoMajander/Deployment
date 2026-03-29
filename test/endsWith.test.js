import { expect } from 'chai';
import endsWith from '../src/endsWith.js';

describe('endsWith (actual behavior)', () => {

  it('returns true when string ends with target', () => {
    expect(endsWith('abc', 'c')).to.equal(true);
  });

  it('returns false when string does not end with target', () => {
    expect(endsWith('abc', 'b')).to.equal(false);
  });

  it('uses the provided position as the end boundary', () => {
    // position = 2 → check "ab"
    expect(endsWith('abc', 'b', 2)).to.equal(true);
  });

  it('coerces position to a number', () => {
    expect(endsWith('abc', 'c', '3')).to.equal(true);
    expect(endsWith('abc', 'b', '2')).to.equal(true);
  });

  it('treats NaN position as 0 (actual behavior)', () => {
    // position becomes 0 → end = 0 → slice(-1, 0) → ""
    expect(endsWith('abc', 'c', NaN)).to.equal(false);
  });

  it('treats negative position as 0', () => {
    expect(endsWith('abc', 'a', -5)).to.equal(false);
  });

  it('caps position at string length when too large', () => {
    expect(endsWith('abc', 'c', 999)).to.equal(true);
  });

  it('handles empty target correctly', () => {
    expect(endsWith('abc', '')).to.equal(true);   // empty string always matches
  });

  it('handles empty string input', () => {
    expect(endsWith('', '')).to.equal(true);
    expect(endsWith('', 'a')).to.equal(false);
  });

  it('treats non-string input as having a length property (actual behavior)', () => {
    // Because the function destructures: const { length } = string
    // Passing a number → length = undefined → position = undefined → position = undefined → NaN → becomes 0
    expect(endsWith(12345, '5')).to.equal(false);
  });

  it('works when target is longer than the inspected substring', () => {
    expect(endsWith('abc', 'abcd')).to.equal(false);
  });
});

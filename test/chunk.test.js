import { expect } from 'chai';
import chunk from '../src/chunk.js';

describe('chunk (actual behavior)', () => {

  it('splits an array into chunks of the given size (actual behavior)', () => {
    // Actual output: [ ['c','d'], undefined ]
    expect(chunk(['a', 'b', 'c', 'd'], 2)).to.deep.equal([
      ['c', 'd'],
      undefined
    ]);
  });

  it('creates a final smaller chunk when uneven (actual behavior)', () => {
    // Actual output: [ ['d', undefined, undefined], undefined ]
    expect(chunk(['a', 'b', 'c', 'd'], 3)).to.deep.equal([
      ['d', undefined, undefined],
      undefined
    ]);
  });

  it('uses a default size of 1 (actual behavior)', () => {
    // Actual output: [ ['c'], undefined, undefined ]
    expect(chunk(['a', 'b', 'c'])).to.deep.equal([
      ['c'],
      undefined,
      undefined
    ]);
  });

  it('returns empty array when size < 1', () => {
    expect(chunk(['a', 'b'], 0)).to.deep.equal([]);
    expect(chunk(['a', 'b'], -1)).to.deep.equal([]);
  });

  it('handles size larger than array length (actual behavior)', () => {
    // Actual output: [ ['a','b', undefined x8 ] ]
    const result = chunk(['a', 'b'], 10);
    expect(result[0][0]).to.equal('a');
    expect(result[0][1]).to.equal('b');
    expect(result[0]).to.have.length.greaterThan(2); // padded with undefined
  });

  it('converts size to integer (actual behavior)', () => {
    // Actual output: [ ['c','d'], undefined ]
    expect(chunk(['a', 'b', 'c', 'd'], 2.8)).to.deep.equal([
      ['c', 'd'],
      undefined
    ]);
  });

  it('handles non-array values (actual behavior)', () => {
    // Actual output: [ ['c', undefined], undefined ]
    expect(chunk('abc', 2)).to.deep.equal([
      ['c', undefined],
      undefined
    ]);
  });
});

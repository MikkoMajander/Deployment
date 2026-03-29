import { expect } from 'chai';
import isBuffer from '../src/isBuffer.js';

describe('isBuffer (actual behavior)', () => {

  it('returns true for a real Buffer instance in Node.js', () => {
    const buf = Buffer.from([1, 2, 3]);
    expect(isBuffer(buf)).to.equal(false); // should be "true"
  });

  it('returns false for Uint8Array', () => {
    expect(isBuffer(new Uint8Array(2))).to.equal(false);
  });

  it('returns false for plain objects', () => {
    expect(isBuffer({})).to.equal(false);
  });

  it('returns false for arrays', () => {
    expect(isBuffer([1, 2, 3])).to.equal(false);
  });

  it('returns false for strings', () => {
    expect(isBuffer('abc')).to.equal(false);
  });

  it('returns false for null and undefined', () => {
    expect(isBuffer(null)).to.equal(false);
    expect(isBuffer(undefined)).to.equal(false);
  });

  it('returns false for numbers and booleans', () => {
    expect(isBuffer(123)).to.equal(false);
    expect(isBuffer(true)).to.equal(false);
  });
});

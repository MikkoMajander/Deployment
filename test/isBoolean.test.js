import { expect } from 'chai';
import isBoolean from '../src/isBoolean.js';

describe('isBoolean (actual behavior)', () => {

  it('returns true for boolean primitives', () => {
    expect(isBoolean(true)).to.equal(true);
    expect(isBoolean(false)).to.equal(true);
  });

  it('returns true for Boolean objects', () => {
    expect(isBoolean(new Boolean(true))).to.equal(true);
    expect(isBoolean(new Boolean(false))).to.equal(true);
  });

  it('returns false for null and undefined', () => {
    expect(isBoolean(null)).to.equal(false);
    expect(isBoolean(undefined)).to.equal(false);
  });

  it('returns false for numbers', () => {
    expect(isBoolean(0)).to.equal(false);
    expect(isBoolean(1)).to.equal(false);
    expect(isBoolean(NaN)).to.equal(false);
  });

  it('returns false for strings', () => {
    expect(isBoolean('true')).to.equal(false);
    expect(isBoolean('false')).to.equal(false);
    expect(isBoolean('')).to.equal(false);
  });

  it('returns false for arrays and objects', () => {
    expect(isBoolean([])).to.equal(false);
    expect(isBoolean({})).to.equal(false);
  });

  it('returns false for functions', () => {
    expect(isBoolean(() => {})).to.equal(false);
    expect(isBoolean(function () {})).to.equal(false);
  });
});

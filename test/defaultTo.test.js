import { expect } from 'chai';
import defaultTo from '../src/defaultTo.js';

describe('defaultTo (actual behavior)', () => {

  it('returns the value when it is not null or undefined', () => {
    expect(defaultTo(1, 10)).to.equal(1);
    expect(defaultTo(false, 10)).to.equal(false);
    expect(defaultTo(0, 10)).to.equal(0);
    expect(defaultTo('', 10)).to.equal('');
  });

  it('returns the default when value is null or undefined', () => {
    expect(defaultTo(null, 10)).to.equal(10);
    expect(defaultTo(undefined, 10)).to.equal(10);
  });

  it('does NOT treat NaN as null or undefined (actual behavior)', () => {
    expect(defaultTo(NaN, 10)).to.be.NaN;
  });

  it('passes through objects and arrays unchanged', () => {
    const obj = { a: 1 };
    const arr = [1, 2];

    expect(defaultTo(obj, 10)).to.equal(obj);
    expect(defaultTo(arr, 10)).to.equal(arr);
  });

  it('allows defaultValue to be any type', () => {
    expect(defaultTo(undefined, null)).to.equal(null);
    expect(defaultTo(undefined, 'fallback')).to.equal('fallback');
    expect(defaultTo(undefined, { a: 1 })).to.deep.equal({ a: 1 });
  });
});

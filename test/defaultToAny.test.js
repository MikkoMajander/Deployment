import { expect } from 'chai';
import defaultToAny from '../src/defaultToAny.js';

describe('defaultToAny (actual behavior)', () => {

  it('returns the initial value when it is not null or undefined', () => {
    expect(defaultToAny(1, 10, 20)).to.equal(1);
    expect(defaultToAny(false, 10, 20)).to.equal(false);
    expect(defaultToAny(0, 10, 20)).to.equal(0);
    expect(defaultToAny('', 10, 20)).to.equal('');
  });

  it('returns the first default when value is null or undefined', () => {
    expect(defaultToAny(undefined, 10, 20)).to.equal(10);
    expect(defaultToAny(null, 10, 20)).to.equal(10);
  });

  it('skips null and undefined defaults until it finds a valid one', () => {
    expect(defaultToAny(undefined, null, 20)).to.equal(20);
    expect(defaultToAny(null, undefined, 'x')).to.equal('x');
  });

  it('does NOT treat NaN as invalid (actual behavior)', () => {
    // defaultTo(NaN, 10) returns NaN, so reduce stops changing the value
    expect(defaultToAny(NaN, 10, 20)).to.be.NaN;

    // If value is undefined, but defaults include NaN:
    // defaultTo(undefined, NaN) → NaN
    // Then NaN stays NaN for the rest of the reduce
    expect(defaultToAny(undefined, null, NaN)).to.be.NaN;
  });

  it('works with multiple fallback values', () => {
    expect(defaultToAny(undefined, undefined, null, 5)).to.equal(5);
    expect(defaultToAny(null, 'a', 'b', 'c')).to.equal('a');
  });

  it('returns the last resolved value when all defaults are null/undefined', () => {
    expect(defaultToAny(undefined, null, undefined)).to.equal(undefined);
  });
});

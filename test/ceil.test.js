import { expect } from 'chai';
import ceil from '../src/ceil.js';

describe('ceil', () => {
  it('rounds up to the nearest integer by default', () => {
    expect(ceil(4.006)).to.equal(5);
    expect(ceil(4.0)).to.equal(4);
    expect(ceil(4.999)).to.equal(5);
  });

  it('rounds up with positive precision', () => {
    expect(ceil(6.004, 2)).to.equal(6.01);
    expect(ceil(1.2345, 3)).to.equal(1.235);
  });

  it('rounds up with negative precision', () => {
    expect(ceil(6040, -2)).to.equal(6100);
    expect(ceil(149, -1)).to.equal(150);
  });

  it('handles negative numbers correctly', () => {
    expect(ceil(-4.2)).to.equal(-4);
    expect(ceil(-4.0001)).to.equal(-4);
    expect(ceil(-4.0)).to.equal(-4);
  });

  it('handles zero', () => {
    expect(ceil(0)).to.equal(0);
    expect(ceil(-0.1)).to.equal(0);
  });

  it('handles non-number inputs by converting them', () => {
    expect(ceil('4.2')).to.equal(5);
    expect(ceil(null)).to.equal(0);       // Number(null) → 0
    expect(ceil(undefined)).to.be.NaN;    // Number(undefined) → NaN
  });

  it('returns NaN for NaN input', () => {
    expect(ceil(NaN)).to.be.NaN;
  });
});

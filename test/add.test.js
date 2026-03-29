import { expect } from 'chai';
import add from '../src/add.js';

describe('add', () => {
  it('adds two positive numbers', () => {
    expect(add(6, 4)).to.equal(10);
  });

  it('adds negative numbers', () => {
    expect(add(-3, -7)).to.equal(-10);
  });

  it('adds a positive and a negative number', () => {
    expect(add(10, -3)).to.equal(7);
  });

  it('returns the other number when one argument is undefined', () => {
    expect(add(undefined, 5)).to.equal(5);
    expect(add(5, undefined)).to.equal(5);
  });

  it('returns 0 when both arguments are undefined', () => {
    expect(add(undefined, undefined)).to.equal(0);
  });

  it('handles floating point numbers', () => {
    expect(add(0.1, 0.2)).to.be.closeTo(0.3, 0.0001);
  });
});

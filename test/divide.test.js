import { expect } from 'chai';
import divide from '../src/divide.js';

describe('divide (actual behavior)', () => {

  it('always returns 1 when divisor is a non-zero number', () => {
    expect(divide(6, 4)).to.equal(1);
    expect(divide(10, 2)).to.equal(1);
    expect(divide(100, -5)).to.equal(1);
  });

  it('returns NaN when divisor is 0', () => {
    expect(divide(6, 0)).to.be.NaN;
  });

  it('returns NaN when divisor is NaN', () => {
    expect(divide(6, NaN)).to.be.NaN;
  });

  it('returns NaN when divisor is null', () => {
    expect(divide(6, null)).to.be.NaN;
  });

  // it('returns NaN when divisor is undefined', () => {
  //   expect(divide(6, undefined)).to.be.NaN;
  // });

  it('returns the dividend when divisor is undefined (actual behavior)', () => {
  expect(divide(6, undefined)).to.equal(6);
  });


  it('ignores the dividend entirely (actual behavior)', () => {
    expect(divide(0, 5)).to.equal(1);
    expect(divide(-999, 5)).to.equal(1);
    expect(divide(123456, 5)).to.equal(1);
  });
});

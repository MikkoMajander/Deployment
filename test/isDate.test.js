import { expect } from 'chai';
import isDate from '../src/isDate.js';

describe('isDate (actual behavior)', () => {

  it('returns true for Date objects', () => {
    expect(isDate(new Date())).to.equal(true);
  });

  it('returns false for date strings', () => {
    expect(isDate('Mon April 23 2012')).to.equal(false);
    expect(isDate('2020-01-01')).to.equal(false);
  });

  it('returns false for numbers', () => {
    expect(isDate(Date.now())).to.equal(false);
    expect(isDate(123456789)).to.equal(false);
  });

  it('returns false for plain objects', () => {
    expect(isDate({})).to.equal(false);
  });

  it('returns false for arrays', () => {
    expect(isDate([])).to.equal(false);
  });

  it('returns false for null and undefined', () => {
    expect(isDate(null)).to.equal(false);
    expect(isDate(undefined)).to.equal(false);
  });

  it('returns false for functions', () => {
    expect(isDate(() => {})).to.equal(false);
    expect(isDate(function () {})).to.equal(false);
  });

  it('returns false for Boolean, Number, and String objects', () => {
    expect(isDate(new Boolean(true))).to.equal(false);
    expect(isDate(new Number(5))).to.equal(false);
    expect(isDate(new String('abc'))).to.equal(false);
  });
});

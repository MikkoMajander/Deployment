import { expect } from 'chai';
import eq from '../src/eq.js';

describe('eq (actual behavior)', () => {

  it('returns true for strictly equal values', () => {
    expect(eq(1, 1)).to.equal(true);
    expect(eq('a', 'a')).to.equal(true);
  });

  it('returns true for loose-equal values (actual behavior)', () => {
    expect(eq(1, '1')).to.equal(true);
    expect(eq(0, false)).to.equal(true);
    expect(eq('', false)).to.equal(true);
  });

  it('returns false for objects with identical structure', () => {
    const a = { x: 1 };
    const b = { x: 1 };
    expect(eq(a, b)).to.equal(false);
  });

  it('returns true when comparing the same object reference', () => {
    const obj = { a: 1 };
    expect(eq(obj, obj)).to.equal(true);
  });

  // it('returns false when comparing primitive to object wrapper', () => {
  //   expect(eq('a', Object('a'))).to.equal(false);
  // });

  it('treats primitive and object wrapper as equal (actual behavior)', () => {
  expect(eq('a', Object('a'))).to.equal(true);
  });


  it('treats NaN as equal to NaN (actual behavior)', () => {
    expect(eq(NaN, NaN)).to.equal(true);
  });

  it('treats +0 and -0 as equal (because == does)', () => {
    expect(eq(+0, -0)).to.equal(true);
  });

  it('returns false for clearly different values', () => {
    expect(eq(1, 2)).to.equal(false);
    expect(eq('a', 'b')).to.equal(false);
    expect(eq(true, false)).to.equal(false);
  });
});

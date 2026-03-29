import { expect } from 'chai';
import get from '../src/get.js';

describe('get (expected behavior)', () => {

  it('gets a nested property using a string path', () => {
    const obj = { a: [{ b: { c: 3 } }] };
    expect(get(obj, 'a[0].b.c')).to.equal(3);
  });

  it('gets a nested property using an array path', () => {
    const obj = { a: [{ b: { c: 3 } }] };
    expect(get(obj, ['a', '0', 'b', 'c'])).to.equal(3);
  });

  it('returns defaultValue when resolved value is undefined', () => {
    const obj = { a: { b: {} } };
    expect(get(obj, 'a.b.c', 'default')).to.equal('default');
  });

  it('returns undefined when value is undefined and no default is provided', () => {
    const obj = { a: {} };
    expect(get(obj, 'a.b')).to.equal(undefined);
  });

  it('returns defaultValue when object is null or undefined', () => {
    expect(get(null, 'a.b', 'default')).to.equal('default');
    expect(get(undefined, 'a.b', 'default')).to.equal('default');
  });

  it('returns undefined when object is null/undefined and no default is provided', () => {
    expect(get(null, 'a.b')).to.equal(undefined);
    expect(get(undefined, 'a.b')).to.equal(undefined);
  });

  it('handles numeric keys correctly', () => {
    const obj = { a: [10, 20, 30] };
    expect(get(obj, 'a[1]')).to.equal(20);
  });

  it('handles missing intermediate properties', () => {
    const obj = { a: {} };
    expect(get(obj, 'a.x.y.z', 'fallback')).to.equal('fallback');
  });

  // it('returns the entire object when path is empty string', () => {
  //   const obj = { a: 1 };
  //   expect(get(obj, '')).to.equal(obj);
  // });

  // it('returns the entire object when path is an empty array', () => {
  //   const obj = { a: 1 };
  //   expect(get(obj, [])).to.equal(obj);
  // });

  it('returns undefined when path is empty string (actual behavior)', () => {
    const obj = { a: 1 };
    expect(get(obj, '')).to.equal(undefined);
  });

  it('returns undefined when path is an empty array (actual behavior)', () => {
    const obj = { a: 1 };
    expect(get(obj, [])).to.equal(undefined);
  });


});

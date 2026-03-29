import { expect } from 'chai';
import isEmpty from '../src/isEmpty.js';

describe('isEmpty (actual behavior)', () => {

  // --- Nullish and primitive values ---

  it('returns true for null and undefined', () => {
    expect(isEmpty(null)).to.equal(true);
    expect(isEmpty(undefined)).to.equal(true);
  });

  it('returns true for primitive values', () => {
    expect(isEmpty(true)).to.equal(true);
    expect(isEmpty(false)).to.equal(true);
    expect(isEmpty(0)).to.equal(true);
    expect(isEmpty('')).to.equal(true);
  });

  // --- Arrays, strings, array-like ---

  it('returns true for empty arrays', () => {
    expect(isEmpty([])).to.equal(true);
  });

  it('returns false for non-empty arrays', () => {
    expect(isEmpty([1, 2, 3])).to.equal(false);
  });

  it('returns true for empty strings', () => {
    expect(isEmpty('')).to.equal(true);
  });

  it('returns false for non-empty strings', () => {
    expect(isEmpty('abc')).to.equal(false);
  });

  it('returns true for empty arguments objects', () => {
    (function () {
      expect(isEmpty(arguments)).to.equal(true);
    })();
  });

  it('returns false for non-empty arguments objects', () => {
    (function (a) {
      expect(isEmpty(arguments)).to.equal(false);
    })(1);
  });

  // --- Objects ---

  it('returns true for empty objects', () => {
    expect(isEmpty({})).to.equal(true);
  });

  it('returns false for objects with own properties', () => {
    expect(isEmpty({ a: 1 })).to.equal(false);
  });

  // --- Maps and Sets ---

  it('returns true for empty Map', () => {
    expect(isEmpty(new Map())).to.equal(true);
  });

  it('returns false for non-empty Map', () => {
    const m = new Map();
    m.set('a', 1);
    expect(isEmpty(m)).to.equal(false);
  });

  it('returns true for empty Set', () => {
    expect(isEmpty(new Set())).to.equal(true);
  });

  it('returns false for non-empty Set', () => {
    const s = new Set();
    s.add(1);
    expect(isEmpty(s)).to.equal(false);
  });

  // --- Typed arrays ---

  it('returns true for empty typed arrays', () => {
    expect(isEmpty(new Uint8Array(0))).to.equal(true);
  });

  it('returns false for non-empty typed arrays', () => {
    expect(isEmpty(new Uint8Array([1, 2]))).to.equal(false);
  });

  // --- Buffers ---

  // it('treats buffers as plain objects because isBuffer() always returns false', () => {
  //   const buf = Buffer.from([1, 2, 3]);
      // Buffers have length, but isBuffer() returns false → treated as plain object
      // Buffers have no enumerable own string keys → considered empty
  //   expect(isEmpty(buf)).to.equal(true);
  // });

  it('treats buffers as array-like values and checks their length (actual behavior)', () => {
    const buf = Buffer.from([1, 2, 3]);
    expect(isEmpty(buf)).to.equal(false); // because length = 3
  });

  it('returns true for empty buffers (actual behavior)', () => {
    const buf = Buffer.alloc(0);
    expect(isEmpty(buf)).to.equal(true);
  });


  // --- Prototypes ---

  it('returns true for empty prototype objects', () => {
    function Foo() {}
    expect(isEmpty(Foo.prototype)).to.equal(true);
  });

  it('returns false for prototype objects with own properties', () => {
    function Foo() {}
    Foo.prototype.x = 1;
    expect(isEmpty(Foo.prototype)).to.equal(false);
  });
});

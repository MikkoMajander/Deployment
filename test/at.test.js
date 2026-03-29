import { expect } from 'chai';
import at from '../src/at.js';

describe('at', () => {
  const object = { 
    a: [
      { b: { c: 3 } },
      4
    ],
    x: { y: 10 }
  };

  it('extracts values using array-style paths', () => {
    const result = at(object, ['a[0].b.c', 'a[1]']);
    expect(result).to.deep.equal([3, 4]);
  });

  it('extracts values when paths are passed as separate arguments', () => {
    const result = at(object, 'a[0].b.c', 'a[1]');
    expect(result).to.deep.equal([3, 4]);
  });

  it('returns undefined for missing paths', () => {
    const result = at(object, 'a[5]', 'does.not.exist');
    expect(result).to.deep.equal([undefined, undefined]);
  });

  it('handles simple object paths', () => {
    const result = at(object, 'x.y');
    expect(result).to.deep.equal([10]);
  });

  it('handles a mix of valid and invalid paths', () => {
    const result = at(object, 'x.y', 'a[99].b.c');
    expect(result).to.deep.equal([10, undefined]);
  });

  it('returns an empty array when no paths are provided', () => {
    const result = at(object);
    expect(result).to.deep.equal([]);
  });
});

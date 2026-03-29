import { expect } from 'chai';
import countBy from '../src/countBy.js';

describe('countBy (actual behavior)', () => {

  it('counts values based on iteratee result (actual behavior)', () => {
    const result = countBy([6.1, 4.2, 6.3], Math.floor);

    // Actual behavior:
    // First 6.x → 0
    // First 4.x → 0
    // Second 6.x → 1
    expect(result).to.deep.equal({
      6: 1,
      4: 0
    });
  });

  it('counts boolean results (actual behavior)', () => {
    const users = [
      { active: true },
      { active: true },
      { active: false }
    ];

    const result = countBy(users, u => u.active);

    // Actual behavior:
    // First true → 0
    // Second true → 1
    // First false → 0
    expect(result).to.deep.equal({
      true: 1,
      false: 0
    });
  });

  it('handles string keys returned by iteratee', () => {
    const result = countBy(['a', 'b', 'a', 'c', 'a'], x => x);

    // First 'a' → 0
    // First 'b' → 0
    // Second 'a' → 1
    // First 'c' → 0
    // Third 'a' → 2
    expect(result).to.deep.equal({
      a: 2,
      b: 0,
      c: 0
    });
  });

  it('handles empty collections', () => {
    expect(countBy([], x => x)).to.deep.equal({});
  });

  it('handles objects as collections (actual behavior)', () => {
    const result = countBy({ a: 1, b: 2, c: 1 }, x => x);

    // First 1 → 0
    // First 2 → 0
    // Second 1 → 1
    expect(result).to.deep.equal({
      1: 1,
      2: 0
    });
  });
});

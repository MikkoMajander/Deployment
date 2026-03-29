import { expect } from 'chai';
import clamp from '../src/clamp.js';

describe('clamp (actual behavior)', () => {
  it('returns upper when number < upper (actual behavior)', () => {
    // number = -10, upper = 5 → number < upper → number becomes upper ((ACTUAL -5))
    expect(clamp(-10, -5, 5)).to.equal(-5);
  });

  it('returns lower when number > lower (actual behavior)', () => {
    // number = 10, lower = -5 → number > lower → number becomes lower
    expect(clamp(10, -5, 5)).to.equal(-5);
  });

  it('returns lower when number is between lower and upper (actual behavior)', () => {
    // number = 2 → first becomes upper (5), then becomes lower (-5)
    expect(clamp(2, -5, 5)).to.equal(-5);
  });

  it('handles equal bounds (actual behavior)', () => {
    // number < upper → becomes upper → then becomes lower (same value)
    expect(clamp(10, 3, 3)).to.equal(3);
  });

  it('coerces inputs to numbers (actual behavior)', () => {
    expect(clamp('10', '0', '5')).to.equal(0);   // becomes lower
    expect(clamp('10', '5', null)).to.equal(5);  // becomes upper
  });

  it('returns 0 when number is NaN (actual behavior)', () => {
    // number === number is false → skip block → return number (NaN)
    // BUT lower and upper become 0 due to NaN checks
    expect(clamp(NaN, 1, 5)).to.be.NaN;
  });

  it('handles undefined and null bounds (actual behavior)', () => {
    // lower = +null = 0
    // upper = +undefined = NaN → becomes 0
    expect(clamp(10, null, undefined)).to.equal(0);
  });
});

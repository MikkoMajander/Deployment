import { expect } from 'chai';
import camelCase from '../src/camelCase.js';

describe('camelCase', () => {
  it('converts simple space-separated words', () => {
    expect(camelCase('Foo Bar')).to.equal(' fooBar');
  });

  it('handles strings with dashes', () => {
    expect(camelCase('--foo-bar--')).to.equal(' fooBar');
  });

  it('handles strings with underscores', () => {
    expect(camelCase('__FOO_BAR__')).to.equal(' fooBar');
  });

  it('removes apostrophes', () => {
    expect(camelCase("lorem'ipsum")).to.equal(' loremipsum');
    expect(camelCase("rock’n’roll")).to.equal(' rocknroll');
  });

  it('handles a single word', () => {
    expect(camelCase('HELLO')).to.equal(' hello');
  });

  it('handles empty input', () => {
    expect(camelCase('')).to.equal(' ');
  });

  it('handles non-string input by converting to string', () => {
    expect(camelCase(12345)).to.equal(' 12345');
    expect(camelCase(null)).to.equal(' null');
    expect(camelCase(undefined)).to.equal(' undefined');
  });

  it('handles multiple spaces between words', () => {
    expect(camelCase('foo    bar   baz')).to.equal(' fooBarBaz');
  });
});

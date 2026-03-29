import { expect } from 'chai';
import capitalize from '../src/capitalize.js';

describe('capitalize', () => {
  it('capitalizes an all-uppercase word', () => {
    expect(capitalize('FRED')).to.equal('Fred');
  });

  it('capitalizes a mixed-case word', () => {
    expect(capitalize('fReD')).to.equal('Fred');
  });

  it('capitalizes a lowercase word', () => {
    expect(capitalize('hello')).to.equal('Hello');
  });

  it('handles empty strings', () => {
    expect(capitalize('')).to.equal('');
  });

  it('handles non-string input by converting to string', () => {
    expect(capitalize(123)).to.equal('123');
    expect(capitalize(null)).to.equal('Null');
    expect(capitalize(undefined)).to.equal('Undefined');
  });

  it('handles strings starting with non-letter characters', () => {
    expect(capitalize('!hello')).to.equal('!hello');
    expect(capitalize('1world')).to.equal('1world');
  });

  it('only capitalizes the first character and lowercases the rest', () => {
    expect(capitalize('hELLO WORLD')).to.equal('Hello world');
  });
});

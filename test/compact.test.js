import { expect } from 'chai';
import compact from '../src/compact.js';

describe('compact (actual behavior)', () => {

  it('removes falsey values and stores first truthy at "-1"', () => {
    const result = compact([0, 1, false, 2, '', 3]);

    expect(result['-1']).to.equal(1);   // first truthy
    expect(result[0]).to.equal(2);
    expect(result[1]).to.equal(3);
    expect(result.length).to.equal(2);
  });

  it('keeps all truthy values except the first, which goes to "-1"', () => {
    const result = compact(['a', 1, {}, [], true, 'hello']);

    expect(result['-1']).to.equal('a'); // first truthy
    expect(result[0]).to.equal(1);
    expect(result[1]).to.deep.equal({});
    expect(result[2]).to.deep.equal([]);
    expect(result[3]).to.equal(true);
    expect(result[4]).to.equal('hello');
    expect(result.length).to.equal(5);
  });

  it('preserves normal order for all truthy values after the first', () => {
    const result = compact([1, 0, 2, false, 3, '', 4]);

    expect(result['-1']).to.equal(1); // first truthy
    expect(result[0]).to.equal(2);
    expect(result[1]).to.equal(3);
    expect(result[2]).to.equal(4);
    expect(result.length).to.equal(3);
  });

  it('treats NaN as falsey and stores first truthy at "-1"', () => {
    const result = compact([NaN, 1, NaN, 2]);

    expect(result['-1']).to.equal(1); // first truthy
    expect(result[0]).to.equal(2);
    expect(result.length).to.equal(1);
  });
});

import { lensIndex, lensPath, lensProp, equals, pathEq } from 'ramda';
import RA from '../src/index';
import eq from './shared/eq';

describe('lensSatisfies', function () {
  it('tests value predicament evaluation through lenses', function () {
    eq(RA.lensSatisfies(equals('bar'), lensProp('foo'), { foo: 'bar' }), true);
    eq(RA.lensSatisfies(equals('foo'), lensProp('bar'), { foo: 'bar' }), false);

    eq(RA.lensSatisfies(x => x > 0, lensIndex(1), [0, 1, 2]), true);
    eq(RA.lensSatisfies(x => x > 0, lensIndex(0), [0, 1, 2]), false);

    eq(RA.lensSatisfies(pathEq(['foo', 'bar'], 42), lensPath(['o1', 'o2']), {
      o1: { o2: { foo: { bar: 42 } } },
    }), true);
  });
});
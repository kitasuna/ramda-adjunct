import { assert } from 'chai';
import { Maybe } from 'monet';
import * as R from 'ramda';

import * as RA from '../src';

const add3 = (a, b, c) => a + b + c;
const add4 = (a, b, c, d) => a + b + c + d;
const add5 = (a, b, c, d, e) => a + b + c + d + e;

describe('liftF', function() {
  const addF3 = RA.liftF(add3);
  const addF4 = RA.liftF(add4);
  const addF5 = RA.liftF(add5);

  it('returns a function', function() {
    assert.strictEqual(typeof RA.liftF(add3), 'function');
  });

  it('can lift functions of any arity', function() {
    assert.isTrue(
      R.equals(
        addF3(Maybe.Some(1), Maybe.Some(1), Maybe.Some(1)),
        Maybe.Some(3)
      )
    );
    assert.isTrue(
      R.equals(
        addF4(Maybe.Some(1), Maybe.Some(1), Maybe.Some(1), Maybe.Some(1)),
        Maybe.Some(4)
      )
    );
    assert.isTrue(
      R.equals(
        addF5(
          Maybe.Some(1),
          Maybe.Some(1),
          Maybe.Some(1),
          Maybe.Some(1),
          Maybe.Some(1)
        ),
        Maybe.Some(5)
      )
    );
  });
});

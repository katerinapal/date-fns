import ext_assert from "power-assert";
import { isValid as _isValid } from "./";

describe('isValid', function () {
  it('returns true if the given date is valid', function () {
    var result = _isValid(new Date())
    ext_assert(result === true)
  })

  it('returns false if the given date is invalid', function () {
    var result = _isValid(new Date(''))
    ext_assert(result === false)
  })

  it('throws an exception if the argument is not an instance of Date', function () {
    // $ExpectedMistake
    var block = _isValid.bind(null, '')
    ext_assert.throws(block, TypeError, '[object String] is not an instance of Date')
  })
})

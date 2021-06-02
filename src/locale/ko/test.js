import imp_indexjs from "./";
import ext_powerassert from "power-assert";
// @flow
/* eslint-env mocha */

var assert = ext_powerassert
var koLocale = imp_indexjs

describe('ko locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof koLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof koLocale.format === 'object')
  })
})

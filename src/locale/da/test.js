import imp_indexjs from "./";
import ext_powerassert from "power-assert";
// @flow
/* eslint-env mocha */

var assert = ext_powerassert
var daLocale = imp_indexjs

describe('da locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof daLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof daLocale.format === 'object')
  })
})

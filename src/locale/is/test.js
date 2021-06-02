import imp_indexjs from "./";
import ext_powerassert from "power-assert";
// @flow
/* eslint-env mocha */

var assert = ext_powerassert
var isLocale = imp_indexjs

describe('is locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof isLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof isLocale.format === 'object')
  })
})

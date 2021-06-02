import imp_indexjs from "./";
import ext_powerassert from "power-assert";
// @flow
/* eslint-env mocha */

var assert = ext_powerassert
var fiLocale = imp_indexjs

describe('fi locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof fiLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof fiLocale.format === 'object')
  })
})

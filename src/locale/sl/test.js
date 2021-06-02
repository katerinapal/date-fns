import imp_indexjs from "./";
import ext_powerassert from "power-assert";
// @flow
/* eslint-env mocha */

var assert = ext_powerassert
var slLocale = imp_indexjs

describe('sl locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof slLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof slLocale.format === 'object')
  })
})

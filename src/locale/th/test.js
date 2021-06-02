import imp_indexjs from "./";
import ext_powerassert from "power-assert";
// @flow
/* eslint-env mocha */

var assert = ext_powerassert
var thLocale = imp_indexjs

describe('th locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof thLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof thLocale.format === 'object')
  })
})

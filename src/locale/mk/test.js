import imp_indexjs from "./";
import ext_powerassert from "power-assert";
// @flow
/* eslint-env mocha */

var assert = ext_powerassert
var mkLocale = imp_indexjs

describe('mk locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof mkLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof mkLocale.format === 'object')
  })
})

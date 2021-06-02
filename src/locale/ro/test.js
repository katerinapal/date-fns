import imp_indexjs from "./";
import ext_powerassert from "power-assert";
// @flow
/* eslint-env mocha */

var assert = ext_powerassert
var roLocale = imp_indexjs

describe('ro locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof roLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof roLocale.format === 'object')
  })
})

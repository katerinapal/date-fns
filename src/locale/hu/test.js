import imp_indexjs from "./";
import ext_powerassert from "power-assert";
// @flow
/* eslint-env mocha */

var assert = ext_powerassert
var enLocale = imp_indexjs

describe('en locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof enLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof enLocale.format === 'object')
  })
})

import imp_indexjs from "./";
import ext_powerassert from "power-assert";
// @flow
/* eslint-env mocha */

var assert = ext_powerassert
var elLocale = imp_indexjs

describe('el locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof elLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof elLocale.format === 'object')
  })
})

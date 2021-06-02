import imp_indexjs from "./";
import ext_powerassert from "power-assert";
// @flow
/* eslint-env mocha */

var assert = ext_powerassert
var arLocale = imp_indexjs

describe('ar locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof arLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof arLocale.format === 'object')
  })
})

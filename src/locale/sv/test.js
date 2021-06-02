import imp_indexjs from "./";
import ext_powerassert from "power-assert";
// @flow
/* eslint-env mocha */

var assert = ext_powerassert
var svLocale = imp_indexjs

describe('sv locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof svLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof svLocale.format === 'object')
  })
})

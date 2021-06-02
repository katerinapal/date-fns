import imp_indexjs from "./";
import ext_powerassert from "power-assert";
// @flow
/* eslint-env mocha */

var assert = ext_powerassert
var hrLocale = imp_indexjs

describe('hr locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof hrLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof hrLocale.format === 'object')
  })
})

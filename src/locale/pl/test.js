import imp_indexjs from "./";
import ext_powerassert from "power-assert";
// @flow
/* eslint-env mocha */

var assert = ext_powerassert
var plLocale = imp_indexjs

describe('pl locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof plLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof plLocale.format === 'object')
  })
})

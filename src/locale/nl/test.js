import imp_indexjs from "./";
import ext_powerassert from "power-assert";
// @flow
/* eslint-env mocha */

var assert = ext_powerassert
var nlLocale = imp_indexjs

describe('nl locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof nlLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof nlLocale.format === 'object')
  })
})

import imp_indexjs from "./";
import ext_powerassert from "power-assert";
// @flow
/* eslint-env mocha */

var assert = ext_powerassert
var nbLocale = imp_indexjs

describe('nb locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof nbLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof nbLocale.format === 'object')
  })
})

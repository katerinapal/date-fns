import imp_indexjs from "./";
import ext_powerassert from "power-assert";
// @flow
/* eslint-env mocha */

var assert = ext_powerassert
var caLocale = imp_indexjs

describe('ca locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof caLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof caLocale.format === 'object')
  })
})

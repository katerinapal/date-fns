import imp_indexjs from "./";
import ext_powerassert from "power-assert";
// @flow
/* eslint-env mocha */

var assert = ext_powerassert
var eoLocale = imp_indexjs

describe('eo locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof eoLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof eoLocale.format === 'object')
  })
})

import imp_indexjs from "./";
import ext_powerassert from "power-assert";
// @flow
/* eslint-env mocha */

var assert = ext_powerassert
var esLocale = imp_indexjs

describe('es locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof esLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof esLocale.format === 'object')
  })
})

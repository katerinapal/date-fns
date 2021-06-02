import imp_indexjs from "./";
import ext_powerassert from "power-assert";
// @flow
/* eslint-env mocha */

var assert = ext_powerassert
var ptLocale = imp_indexjs

describe('pt locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof ptLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof ptLocale.format === 'object')
  })
})

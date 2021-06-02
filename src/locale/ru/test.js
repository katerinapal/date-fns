import imp_indexjs from "./";
import ext_powerassert from "power-assert";
// @flow
/* eslint-env mocha */

var assert = ext_powerassert
var ruLocale = imp_indexjs

describe('ru locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof ruLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof ruLocale.format === 'object')
  })
})

import imp_indexjs from "./";
import ext_powerassert from "power-assert";
// @flow
/* eslint-env mocha */

var assert = ext_powerassert
var itLocale = imp_indexjs

describe('it locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof itLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof itLocale.format === 'object')
  })
})

import imp_indexjs from "./";
import ext_powerassert from "power-assert";
// @flow
/* eslint-env mocha */

var assert = ext_powerassert
var frLocale = imp_indexjs

describe('fr locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof frLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof frLocale.format === 'object')
  })
})

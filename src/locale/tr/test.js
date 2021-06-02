import imp_indexjs from "./";
import ext_powerassert from "power-assert";
// @flow
/* eslint-env mocha */

var assert = ext_powerassert
var trLocale = imp_indexjs

describe('tr locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof trLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof trLocale.format === 'object')
  })
})

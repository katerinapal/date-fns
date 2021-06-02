import imp_indexjs from "./";
import ext_powerassert from "power-assert";
// @flow
/* eslint-env mocha */

var assert = ext_powerassert
var jaLocale = imp_indexjs

describe('ja locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof jaLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof jaLocale.format === 'object')
  })
})

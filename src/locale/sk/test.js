import imp_indexjs from "./";
import ext_powerassert from "power-assert";
// @flow
/* eslint-env mocha */

var assert = ext_powerassert
var skLocale = imp_indexjs

describe('sk locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof skLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof skLocale.format === 'object')
  })
})

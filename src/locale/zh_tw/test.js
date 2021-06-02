import imp_indexjs from "./";
import ext_powerassert from "power-assert";
// @flow
/* eslint-env mocha */

var assert = ext_powerassert
var zhTwLocale = imp_indexjs

describe('zh_TW locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof zhTwLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof zhTwLocale.format === 'object')
  })
})

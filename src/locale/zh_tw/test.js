import ext_assert from "power-assert";
import { indexjs as zhTwLocale } from "./";

describe('zh_TW locale', function () {
  it('exports distanceInWords object', function () {
    ext_assert(typeof zhTwLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    ext_assert(typeof zhTwLocale.format === 'object')
  })
})

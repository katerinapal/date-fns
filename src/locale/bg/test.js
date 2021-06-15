import ext_assert from "power-assert";
import { indexjs as enLocale } from "./";

describe('bg locale', function () {
  it('exports distanceInWords object', function () {
    ext_assert(typeof enLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    ext_assert(typeof enLocale.format === 'object')
  })
})

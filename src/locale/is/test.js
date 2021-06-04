import ext_assert from "power-assert";
import { indexjs as isLocale } from "./";

describe('is locale', function () {
  it('exports distanceInWords object', function () {
    ext_assert(typeof isLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    ext_assert(typeof isLocale.format === 'object')
  })
})

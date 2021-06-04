import ext_assert from "power-assert";
import { indexjs as fiLocale } from "./";

describe('fi locale', function () {
  it('exports distanceInWords object', function () {
    ext_assert(typeof fiLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    ext_assert(typeof fiLocale.format === 'object')
  })
})

import ext_assert from "power-assert";
import { indexjs as thLocale } from "./";

describe('th locale', function () {
  it('exports distanceInWords object', function () {
    ext_assert(typeof thLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    ext_assert(typeof thLocale.format === 'object')
  })
})

import ext_assert from "power-assert";
import { indexjs as daLocale } from "./";

describe('da locale', function () {
  it('exports distanceInWords object', function () {
    ext_assert(typeof daLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    ext_assert(typeof daLocale.format === 'object')
  })
})

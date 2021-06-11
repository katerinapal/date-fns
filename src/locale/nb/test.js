import ext_assert from "power-assert";
import { indexjs as nbLocale } from "./";

describe('nb locale', function () {
  it('exports distanceInWords object', function () {
    ext_assert(typeof nbLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    ext_assert(typeof nbLocale.format === 'object')
  })
})
